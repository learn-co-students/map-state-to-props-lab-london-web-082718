import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  

  render() {
    const {users} = this.props
    return (
      <div>
        <ul>
          {users.length} Users!
          {
            users.map(user => <li>{user.username}</li>)
          }
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  return { users: state.users };
};
 
export default connect(mapStateToProps)(Users);

