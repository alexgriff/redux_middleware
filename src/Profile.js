import React, { Component } from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'


class Profile extends Component {

  renderProfile() {
    return (
      <div>profile goes here</div>
    )
  }

  renderLoader() {
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading..</Loader>
      </Dimmer>
    )
  }

  render() {
    return (
      <div style={{minHeight: '400px'}}>
        {this.props.loading ? renderProfile() : renderLoader()}
      </div>
    )
  }
}

export default Profile
