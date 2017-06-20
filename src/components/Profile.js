import React, { Component } from 'react'
import { Dimmer, Loader, Image } from 'semantic-ui-react'


class Profile extends Component {

  renderProfile() {
    return (
      <div className='ui center aligned grid'>
        <div className="ui row">
          profile goes here...
        </div>
      </div>
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
      <div style={{minHeight: '300px'}}>
        {this.props.loading ? this.renderLoader() : this.renderProfile()}
      </div>
    )
  }
}

export default Profile
