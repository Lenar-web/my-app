import React from 'react'
import LoadPhotoForm from './LoadPhotoForm/LoadPhotoForm'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {savePhoto, saveProfile} from '../../redux/profile-reducer';
import ProfileForm from './ProfileForm/ProfileForm';

let Setting = (props) => {
  let onSubmit = (file) => {
    props.savePhoto(file.attachment)
  }

  let onSubmitProfile = (formData) => {
    props.saveProfile(formData)
  }
  return (
    <div>
      <h3>Загрузите вашу фотографию</h3>
      <LoadPhotoForm onSubmit={onSubmit} {...props} />
      <h3>Информация о себе</h3>
      {props.profile && <ProfileForm onSubmit={onSubmitProfile} initialValues={props.profile} profile={props.profile} />}
      
    </div>
  )
}
let mapStateToProps = (state) => ({
  profile: state.profilePage.myProfile
 })

export default compose(
  connect(mapStateToProps, {savePhoto, saveProfile})
)(Setting);