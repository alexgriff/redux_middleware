import React, { Component } from 'react'
import { Dimmer, Loader, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'


class Profile extends Component {

  renderProfile() {
    return (
      <div className='ui center aligned grid'>
        <div className="ui row">
          <Image
            style={{marginTop: '40px'}}
            shape='circular'
            src={this.props.profile.picture}
          />      
        </div>
        <h1>{this.props.profile.firstName}</h1>
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
      <div style={{minHeight: '400px'}}>
        {this.props.loading ? this.renderLoader() : this.renderProfile()}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    loading: state.loading,
    profile: state.profile
  }
)

export default connect(mapStateToProps)(Profile)
