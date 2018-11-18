import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    return (
      <div>
        <h1>There are {this.props.userCount} users</h1>
        <ul>
          { this.props.users.map( user => <li>{ user.username }</li> )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userCount: state.users.length
  }
}
export default connect(mapStateToProps)(Users)

