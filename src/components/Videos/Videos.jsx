import React from 'react';


let Videos = (props) => {
return (
  <div className="media">
  <div className="row js-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'>
    <div className="grid-sizer col-md-6 col-sm-6"></div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-1">
          {/* <video controls>
            <source src="videos/3.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 46</a>
            <a href="#c"className="btn text-red"><i className="fa fa-thumbs-down"></i> 11</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-10.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Julia Cox</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-1" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/3.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-2">
          {/* <video controls>
            <source src="videos/2.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 30</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 7</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">John Doe</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-2" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/2.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-3">
          {/* <video controls>
            <source src="videos/4.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 233</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 30</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-9.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Anna Young</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-3" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/4.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-4">
          {/* <video controls>
            <source src="videos/5.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 27</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-2.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Linda Lohan</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-4" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/5.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-5">
          {/* <video controls>
            <source src="videos/6.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 34</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 2</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-3.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Sophia Lee</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-5" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/6.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-6">
          {/* <video controls>
            <source src="videos/1.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 71</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">John Doe</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-6" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/1.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-7">
          {/* <video controls>
            <source src="videos/7.mp4" type="video/mp4">
          </video> */}
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 32</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 2</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-5.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">James Carter</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-7" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                {/* <video controls>
                  <source src="videos/7.mp4" type="video/mp4">
                </video> */}
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished"></i> <i className="em em-anguished"></i> <i className="em em-anguished"></i></p>
                    </div>
                    <div className="line-divider"></div>
                    <div className="post-comment">
                      <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                      <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                    <div className="post-comment">
                      <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                      <input type="text" className="form-control" placeholder="Post a comment" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
);
}

export default Videos;