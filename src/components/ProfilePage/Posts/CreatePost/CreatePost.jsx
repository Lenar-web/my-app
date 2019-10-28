import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { required } from '../../../../utils/validators/validators';
import { Textarea } from '../../../Common/FromsControl/FromsControl';



let CreatePost = (props) => {

  return(
    <form onSubmit={props.handleSubmit}>
    <div className="row">
    <div className="col-md-12 col-sm-12">
      <div className="form-group">
        <a href="#c" className="profile-photo-md" >
        <img src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg" alt="" />
        </a>
        <Field className="form-control" name="newPostText" component={Textarea} validate={[required]} placeholder={"Напишите, что у вас нового"} />
      </div>
    </div>
    <div className="col-md-12 col-sm-12">
      <div className="tools">
        <ul className="publishing-tools list-inline">
          <li><a href="#c"><i className="ion-compose"></i></a></li>
          <li><a href="#c"><i className="ion-images"></i></a></li>
          <li><a href="#c"><i className="ion-ios-videocam"></i></a></li>
          <li><a href="#c"><i className="ion-map"></i></a></li>
        </ul>
        <button className="btn btn-primary pull-right">Опубликовать</button>
      </div>
    </div>
  </div>
  </form>
  )
}

const CreatePostReduxForm = reduxForm({form: 'post'})(CreatePost)
export default CreatePostReduxForm
