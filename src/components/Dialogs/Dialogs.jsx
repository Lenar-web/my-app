import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';


let Dialogs = (props) => {
return (
  <div className="chat-room">
    <div className="row">
      <div className="col-md-5">
        <ul className="nav nav-tabs contact-list scrollbar-wrapper scrollbar-outer">
          <DialogsItem name="Линда Лохан" lastMessage="Привет! Ты как?" id="1" time="Минуту назад"/>
          <DialogsItem name="Юлия Кокс" lastMessage="Я вижу" id="2" time="Час назад"/>
          <DialogsItem name="София Ли" lastMessage="Привет! Ты как?" id="3" time="13 часов назад"/>
          <DialogsItem name="Джон Дои" lastMessage="Привет! что нового" id="4" time="Вчера"/>
          <DialogsItem name="Анна Енг" lastMessage="Ты тут?" id="5" time="2 дня назад"/>
          <DialogsItem name="Ричард Билл" lastMessage="Я поеду сегодня" id="6" time="2 дня назад"/>
        </ul>
      </div>
      <div className="col-md-7">
        <div className="tab-content scrollbar-wrapper wrapper scrollbar-outer">
          <div className="tab-pane active" id="contact-1">
            <div className="chat-body">
              <ul className="chat-message">
                <Message name="Линда Лохан" message="Привет! Ты как?" date="3 дня назад" position="left"/>
                <Message name="Ленар Евстафьев" message="Отлично" date="3 дня назад" position="right"/>
                <Message name="Ленар Евстафьев" message="Отлично" date="3 дня назад" position="right"/>
                <Message name="Ленар Евстафьев" message="Отлично" date="3 дня назад" position="right"/>
                <Message name="Линда Лохан" message="Ну это же отлично" date="1 день назад" position="left"/>
                <Message name="Ленар Евстафьев" message="ну не то слово" date="1 день назад" position="right"/>
                <Message name="Линда Лохан" message="Что делаешь?" date="Минуту назад" position="left"/>
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-2">
            <div className="chat-body">
              <ul className="chat-message">
              
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-3">
            <div className="chat-body">
              <ul className="chat-message">

              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-4">
            <div className="chat-body">
              <ul className="chat-message">
               
              </ul>
            </div>
          </div>
          <div className="tab-pane" id="contact-5">
            <div className="chat-body">
              <ul className="chat-message">
                
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
            {/* <input type="text" className="form-control" placeholder="Type your message"> */}
            <span className="input-group-btn">
              <button className="btn btn-default" type="button">Отправить</button>
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