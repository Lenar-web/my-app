import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {updateNewMessageTextActionCreator, AddMessageActionCreator} from './../../redux/State'







const Dialogs = (props) => {

  let dialog = props.state.dialogsData.map(d => <DialogsItem name={d.name} message={d.message} id={d.id} time={d.time}/>);
  let message = props.state.messagesData.map(m => <Message name={m.name} message={m.message} id={m.id} time={m.time} position={m.position} />);

  let AddMessage = () => {
    props.dispatch(AddMessageActionCreator());
  }

  let newMessageElement = React.createRef();

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    // props.updateNewPostText(text)
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

return (
  <div className="chat-room">
    <div className="row">
      <div className="col-md-5">
        <ul className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
          { dialog }
        </ul>
      </div>
      <div className="col-md-7">
        <div className="tab-content scrollbar-wrapper wrapper scrollbar-outer">
          <div className="tab-pane active" id="contact-1">
            <div className="chat-body">
              <ul className="chat-message">
                { message }
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-2">
            <div className="chat-body">
              <ul className="chat-message">
              { message }
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-3">
            <div className="chat-body">
              <ul className="chat-message">
              { message }
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-4">
            <div className="chat-body">
              <ul className="chat-message">
              { message }
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-5">
            <div className="chat-body">
              <ul className="chat-message">
              { message }
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-6">
            <div className="chat-body">
              <ul className="chat-message">
               
              </ul>
            </div>
          </div>
        </div>

        <div className="send-message">
          <div className="input-group">
            <input type="search" className="form-control" placeholder="Type your message" ref={newMessageElement}onChange={onMessageChange} value={props.state.newMessageText}/>
            <span className="input-group-btn">
              <button className="btn btn-default" onClick={AddMessage} type="button">Отправить</button>
            </span>
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  </div>

);
}

export default Dialogs;