import React from 'react';
import {NavLink} from 'react-router-dom';

let About = ({profile,isOwner}) => {
  return(
  <div id="page-contents">
  <div className="row">
    <div className="col-md-12">
      <ul>
        <li>Обо мне:{profile.aboutMe}</li>
        <li>Имя:{profile.fullName}</li>
        <li>Ищу ли я работу:{profile.lookingForAJob ? "Да" : "Нет"}</li>
        {profile.lookingForAJob && <li>Описание желаемой работы: {profile.lookingForAJobDescription}</li>}
        <li><b>Contacts:</b>
          <ul>
          {Object.keys(profile.contacts).map( key => {
          return <Contact key={key} ContactTitle={key} ContactValue={profile.contacts[key]}/>
        })}
          </ul>
        </li>
      </ul>
      
      {isOwner  && <NavLink to="/setting" className="btn btn-primary">
        Редактировать
      </NavLink>}
    </div>
  </div>
</div>
  )
}
const Contact = ({ContactTitle, ContactValue}) => {
  if(ContactValue){
    return <li>{ContactTitle}: <a href={ContactValue}>{ContactValue}</a></li>
  }
  return '' 
}
export default About;