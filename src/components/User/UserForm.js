import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { createNewUser } from './../../redux/actions/index';
import { connect } from 'react-redux';

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
  
  mySubmitHandler(event) {
    event.preventDefault();
    const newUser = this.state.userParams;
    this.props.createNewUser(newUser);
  }
  
  render () {
    if (this.state.redirect) return <Redirect to='/'/>;;
    return (
      <Form onSubmit={this.mySubmitHandler.bind(this)}>

        {(this.props.newUser) ? (
          <Form.Group >
            <Form.Control 
              name="username" 
              type="text" 
              placeholder="Username" 
              onChange={this.myChangeHandler} 
              value={this.state.userParams.username}
            />
          </Form.Group>

        ) : (
          ""
        )}  

        <Form.Group >
          <Form.Control 
            name="email" 
            type="text" 
            placeholder="Email" 
            onChange={this.myChangeHandler} 
            value={this.state.userParams.email}
          />
        </Form.Group>

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
    createNewUser: user => dispatch(createNewUser(user))
  };
};

export default connect(null, mapDispatchToProps)(UserForm);
