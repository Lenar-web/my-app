import React from 'react';

let Footer = () => {
  return (
    <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="footer-wrapper">
          <div className="col-md-3 col-sm-3">
            <a href="#c"><img src="images/logo-black.png" alt="" className="footer-logo" /></a>
            <ul className="list-inline social-icons">
              <li><a href="#c"><i className="icon ion-social-facebook"></i></a></li>
              <li><a href="#c"><i className="icon ion-social-twitter"></i></a></li>
              <li><a href="#c"><i className="icon ion-social-googleplus"></i></a></li>
              <li><a href="#c"><i className="icon ion-social-pinterest"></i></a></li>
              <li><a href="#c"><i className="icon ion-social-linkedin"></i></a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <h6>For individuals</h6>
            <ul className="footer-links">
              <li><a href="#c">Signup</a></li>
              <li><a href="#c">login</a></li>
              <li><a href="#c">Explore</a></li>
              <li><a href="#c">Finder app</a></li>
              <li><a href="#c">Features</a></li>
              <li><a href="#c">Language settings</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <h6>For businesses</h6>
            <ul className="footer-links">
              <li><a href="#c">Business signup</a></li>
              <li><a href="#c">Business login</a></li>
              <li><a href="#c">Benefits</a></li>
              <li><a href="#c">Resources</a></li>
              <li><a href="#c">Advertise</a></li>
              <li><a href="#c">Setup</a></li>
            </ul>
          </div>
          <div className="col-md-2 col-sm-2">
            <h6>About</h6>
            <ul className="footer-links">
              <li><a href="#c">About us</a></li>
              <li><a href="#c">Contact us</a></li>
              <li><a href="#c">Privacy Policy</a></li>
              <li><a href="#c">Terms</a></li>
              <li><a href="#c">Help</a></li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-3">
            <h6>Contact Us</h6>
              <ul className="contact">
                <li><i className="icon ion-ios-telephone-outline"></i>+1 (234) 222 0754</li>
                <li><i className="icon ion-ios-email-outline"></i>info@thunder-team.com</li>
                <li><i className="icon ion-ios-location-outline"></i>228 Park Ave S NY, USA</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright">
      <p>Thunder Team © 2016. All rights reserved</p>
    </div>
  </footer>
  );
}

export default Footer;