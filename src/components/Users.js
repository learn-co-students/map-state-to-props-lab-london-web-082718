import React, { Component } from 'react';
import {connect} from 'react-redux'

class Users extends Component {

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(user =>
              <li>{user.username}</li>
            )}
        </ul>
        Count: {this.props.userCount}
      </div>
    )
  }
}

const mapStateToProps = state => (
  { 
    users: state.users,
    userCount: state.users.length
  }
)

export default connect(mapStateToProps)(Users)
