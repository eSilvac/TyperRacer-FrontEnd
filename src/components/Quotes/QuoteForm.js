import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { GraphqlApi, GraphqlQueries } from '../../api/graphql'
import { connect } from 'react-redux';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class QuoteForm extends Component {
  constructor() {
    super();
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      text: "",
      language: "",
    }
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
      <div className="App">
        <Form.Group>
          <Form.Control name="text" onChange={this.myChangeHandler} as="textarea" rows="5" placeholder="New quote text" value={this.state.text} />
        </Form.Group>

        <Form onSubmit={this.mySubmitHandler.bind(this)}>
          <Form.Group>
            <Form.Control as="select" name="language" onChange={this.myChangeHandler} value={this.state.language} >
              <option value=''>Language of the text</option>
              <option value="ENG">English</option>
              <option value="ESP">Spanish</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" block>
            Create Quote
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(QuoteForm);
