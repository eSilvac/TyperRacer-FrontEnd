import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux
import { GraphqlApi, GraphqlQueries } from '../../api/graphql'
import { connect } from 'react-redux';
import { setRace } from './../../redux/actions/racehandle';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class RaceForm extends Component {
  constructor() {
    super();
    this.myChangeHandler = this.myChangeHandler.bind(this);
    
    this.state = {
      newRace: {
        language: "ENG"
      }
    };
  }

  myChangeHandler(event) {
    let newRace = {...this.state.newRace};
    newRace[event.target.name] = event.target.value;
    this.setState({ newRace: newRace });
  }

  async mySubmitHandler(event) {
    event.preventDefault();
    const newRace = this.state.newRace;
    newRace.userId = this.props.currentUser.id;
    
    this.setState({
      loading: true
    });

    try {
      const { data } = await GraphqlApi.post('graphql', {
        query: GraphqlQueries.createRace,
        variables: {
          racePayload: newRace
        }
      });
      this.props.setRace(data.data.createRace);
    } catch (error) {
      console.log(error);
      this.setState({ error });
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

const mapDispatchToProps = dispatch => {
  return {
    setRace: (racePayload) => dispatch(setRace(racePayload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaceForm);
