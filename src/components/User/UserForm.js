import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { verifyUser } from './../../redux/actions/index';
import { GraphqlApi, GraphqlQueries } from '../../api/graphql'

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class UserForm extends Component {
  constructor(props) {
    super(props);

    this.myChangeHandler = this.myChangeHandler.bind(this);
    this.state = {
      userParams: this.props.userParams,
    }
  }
  
  myChangeHandler(event) {
    let userParams = {...this.state.userParams};
    userParams[event.target.name] = event.target.value;
    this.setState({userParams: userParams});
  }
  
  async mySubmitHandler(event) {
    event.preventDefault()
    const user = this.state.userParams;

    this.setState({
      loading: true
    });

    try {
      const { data } = await GraphqlApi.post('graphql', {
        query: this.props.newUser ? GraphqlQueries.createUser : GraphqlQueries.createSession,
        variables: {
          userPayload: user
        }
      });
      const token = this.props.newUser ? data.data.registerUser.token : data.data.loginUser.token;
      localStorage.setItem('authenticationToken', token); 
      this.props.verifyUser();
      this.setState({ redirect: true });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  
  render () {
    if (this.state.redirect) return <Redirect to='/'/>;
    return (
      <Form onSubmit={this.mySubmitHandler.bind(this)}>
        <Form.Group >
          <Form.Control 
            name="username" 
            type="text" 
            placeholder="Username" 
            onChange={this.myChangeHandler} 
            value={this.state.userParams.username}
          />
        </Form.Group>

        {(this.props.newUser) ? (
          <Form.Group >
            <Form.Control 
              name="email" 
              type="text" 
              placeholder="Email" 
              onChange={this.myChangeHandler} 
              value={this.state.userParams.email}
            />
          </Form.Group>
        ) : (
          ""
        )}  

        <Form.Group >
          <Form.Control 
            name="password" 
            type="password" 
            placeholder="Password" 
            onChange={this.myChangeHandler} 
            value={this.state.userParams.password}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          {(this.props.newUser) ? (
            "Register"
          ) : (
            "Login"
          )}  
        </Button>
      </Form>  
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verifyUser: () => dispatch(verifyUser())
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
