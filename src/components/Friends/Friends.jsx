import React from 'react';
import FriendCard from './FriendCard/FriendCard';

let FriendsData = [
  {name: "София Ли", status: "Студент Гарварда"},
  {name: "Джон до", status: "Путешествинник"},
  {name: "Юлия Кокс", status: "Арт Дизайнер"},
  {name: "Роберт Кук", status: "Фотограф"},
  {name: "Ричард Белл", status: "Графический дизайнер"},
  {name: "Линда Лохан", status: "Инженер"},
  {name: "Анна Ёнг", status: "Музыкант"},
  {name: "Джеймс Картер", status: "Сео специалист"},
  {name: "Алексис Кларк", status: "Путешественник"},
]
let Friend = FriendsData.map(f => <FriendCard  name={f.name} status={f.status}/>);


let Friends = (props) => {
return (
  <div className="friend-list">
  <div className="row">
    { Friend }
  </div>
</div>
);
}

export default Friends;