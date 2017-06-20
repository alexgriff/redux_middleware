import React, { Component } from 'react';
import { Container, Segment, Header, Button } from 'semantic-ui-react'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <Container text fluid textAlign='center' >
        <Header>Random User App</Header>
        <Segment color='blue'>
          <Profile />
          <Button color='blue'>Click Here</Button>
        </Segment>
      </Container>
    );
  }
}

export default App;
