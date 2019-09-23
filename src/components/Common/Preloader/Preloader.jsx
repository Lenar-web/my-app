import React from 'react';
import loader from '../../../assets/images/load.gif'
let Preloader = (props) => { 
  return (<div className="preloader">
    <img src={loader} />
  </div>)
}
export default Preloader