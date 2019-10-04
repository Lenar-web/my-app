import React from 'react';
import LoginReduxForm from './Form';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {login} from '../../../redux/auth-reducer';

class FormContainer extends React.Component {
  componentDidMount() {

  }

  
  onSubmit = (formData) => {
    this.props.login(formData)
  }
  render() {
  return (
    <LoginReduxForm onSubmit={this.onSubmit} {...this.props}/>
  )
}
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
 })

 export default compose(
  connect(mapStateToProps, {login})
)(FormContainer);