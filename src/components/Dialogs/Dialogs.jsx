import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import MessageReduxForm from './MessageForm';


const Dialogs = (props) => {

let messages = props.dialogsPage.messagesData.map( m => <Message position={m.position} id={m.id} name={m.name} date={m.date} message={m.message}  />)
let dialogs = props.dialogsPage.dialogsData.map( d => <DialogsItem id={d.id} name={d.name} time={d.time} message={d.message}/>)

let addMessage = (value) => {
  props.onAddMessage(value.newMessageText)
}

return (
  <div className="chat-room">
    <div className="row">
      <div className="col-md-5">
        <ul className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
          {dialogs}
        </ul>
      </div>
      <div className="col-md-7">
        <div className="tab-content scrollbar-wrapper wrapper scrollbar-outer">
          <div className="tab-pane active" id="contact-1">
            <div className="chat-body">
              <ul className="chat-message">
              {messages}
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-2">
            <div className="chat-body">
              <ul className="chat-message">
              {messages}
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-3">
            <div className="chat-body">
              <ul className="chat-message">
              {messages}
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-4">
            <div className="chat-body">
              <ul className="chat-message">
              {messages}
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-5">
            <div className="chat-body">
              <ul className="chat-message">
              {messages}
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-6">
            <div className="chat-body">
              <ul className="chat-message">
              {messages}
              </ul>
            </div>
          </div>
        </div>

        <div className="send-message">
          <MessageReduxForm onSubmit={addMessage}/>
        </div>
      </div>
      <div className="clearfix"></div>
    </div>
  </div>

);
}

export default Dialogs;