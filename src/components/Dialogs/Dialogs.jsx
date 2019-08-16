import React from 'react';
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';







const Dialogs = (props) => {
  
  let dialogsData = [
    {name: "Линда Лохан", message: "Привет! Ты как?", id: 1, time: "Минуту назад"},
    {name: "Юлия Кокс", message: "Я вижу", id: 2, time: "Час назад"},
    {name: "София Ли", message: "Привет! Ты как?", id: 3, time: "13 часов назад"},
    {name: "Джон Дои", message: "Привет! что нового", id: 4, time: "Вчера"},
    {name: "Анна Енг", message: "Ты тут?", id: 5, time: "2 дня назад"},
    {name: "Ричард Билл", message: "Я поеду сегодня", id: 6, time: "2 дня назад"}
  ];
  
  let messagesData = [
    {name: "Линда Лохан", message: "Привет! Ты как?", id: 1, time: "3 дня назад", position: 'left'},
    {name: "Ленар Евстафьев", message: "Отлично", id: 2, time: "3 дня назад", position: 'right'},
    {name: "Ленар Евстафьев", message: "Отлично", id: 3, time: "3 дня назад", position: 'right'},
    {name: "Ленар Евстафьев", message: "Отлично", id: 4, time: "3 дня назад", position: 'right'},
    {name: "Линда Лохан", message: "Что делаешь?", id: 5, time: "30 минут назад", position: 'left'},
    {name: "Ленар Евстафьев", message: "Работаю", id: 6, time: "Минуту назад", position: 'right'}
  ];

  let dialog = dialogsData.map(d => <DialogsItem name={d.name} message={d.message} id={d.id} time={d.time}/>);
  let message = messagesData.map(m => <Message name={m.name} message={m.message} id={m.id} time={m.time} position={m.position} />);


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