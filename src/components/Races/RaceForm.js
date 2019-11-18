import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { GraphqlApi, GraphqlQueries } from '../../api/graphql'
import { connect } from 'react-redux';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RaceForm extends Component {
  constructor() {
    super();
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      language: ""
    };
  }

  myChangeHandler(event) {
    const inputValue = event.target.value;
    this.setState({[event.target.name]: inputValue});
  }

  async mySubmitHandler(event) {
    event.preventDefault();
    const newQuote = this.state;
    newQuote.userId = this.props.currentUser.id;
    
    this.setState({
      loading: true
    });

    try {
      await GraphqlApi.post('graphql', {
        query: GraphqlQueries.createQuote,
        variables: {
          quotePayload: newQuote
        }
      });

      this.setState({ text: "", language: "", redirect: true });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to='/'/>;
    return (
      <div className="CreateRaceForm">
        <h6 className="text-center text-muted mb-3">Create Your Own race, with a specific language.</h6>
        <Form onSubmit={this.mySubmitHandler.bind(this)}>
          <Form.Group>
            <Form.Control as="select" name="language" size="lg" onChange={this.myChangeHandler} value={this.state.language} >
              <option value=''>Language of the text</option>
              <option value="ENG">English</option>
              <option value="ESP">Spanish</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" size="lg" block>
            Create New Race
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(RaceForm);
