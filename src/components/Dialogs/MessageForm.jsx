import React from 'react';
import { Field, reduxForm } from 'redux-form';


const MessageForm = (props) => {

return ( <form onSubmit={props.handleSubmit}>
        <div className="input-group">
            {/* <input type="search" className="form-control" placeholder="Ваше сообщение" /> */}
            <Field type="text" name="newMessageText" component="input" className="form-control" placeholder="Ваше сообщение" />
            <span className="input-group-btn">
              <button className="btn btn-default">Отправить</button>
            </span>
          </div>
        </form>
);
}
const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)

export default MessageReduxForm
