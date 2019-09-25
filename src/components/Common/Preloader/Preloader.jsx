import React from 'react';
import loader from '../../../assets/images/load.gif'
let Preloader = (props) => { 
  return (<div className="preloader">
    <img src={loader} alt="Загрузка"/>
  </div>)
}
export default Preloader