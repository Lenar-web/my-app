import React from 'react';
import LoginReduxForm from './Form/Form';
import Login from './Login';

class LoginContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1688;
    }
    this.props.getProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
  return (
  <Login {...this.props}/>
  )
}
}

export default LoginContainer