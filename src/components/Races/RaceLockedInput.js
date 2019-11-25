// Configurations
import React from 'react';

// Components

// Bootstrap
import Form from 'react-bootstrap/Form';

// Redux

function RaceTitle({ currentRace }) {
  return ( 
    <Form.Control
      placeholder="Type the text"
      className="text-input py-4"
      disabled
    />
  )
}

export default RaceTitle;
