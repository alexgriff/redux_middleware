import React, { Component } from 'react'
import { Container, Segment, Header, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Profile from './Profile'
import * as actions from '../actions'


class App extends Component {
  render() {
    return (
      <Container text fluid textAlign='center' >
        <Header>Random User App</Header>
        <Segment color='blue'>
          <Profile />
          <Button
            color='blue'
            onClick={this.props.fetchProfile}
          >
            Click Here
          </Button>
        </Segment>
      </Container>
    );
  }
}

export default connect(()=>({}), actions)(App)
