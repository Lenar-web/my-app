import React from 'react'
import LoadPhotoForm from './LoadPhotoForm/LoadPhotoForm'
import {connect} from 'react-redux';
import {compose} from 'redux';
import {savePhoto} from '../../redux/profile-reducer';

let Setting = (props) => {
  let onSubmit = (file) => {
    props.savePhoto(file.attachment)
  }
  return (
    <div>
      <h4>Загрузите вашу фотографию</h4>
      <LoadPhotoForm onSubmit={onSubmit} {...props} />
    </div>
  )
}

export default compose(
  connect(null, {savePhoto})
)(Setting);