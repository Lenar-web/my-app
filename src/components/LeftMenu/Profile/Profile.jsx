import React from 'react';


let Profile = (props) => {
  return (

    <div className="profile-card">
      <img src="https://sun9-32.userapi.com/c847217/v847217358/12ef68/SBEQOk1q8Eo.jpg" alt="user" className="profile-photo" />
      <h5><a href="timeline.html" className="text-white">Ленар Евстафьев</a></h5>
      <a href="#c" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 подписчиков</a>
    </div>

  );
}

export default Profile;