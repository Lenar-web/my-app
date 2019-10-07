import React from 'react';


let Images = (props) => {
return (
  <div className="media">
  <div className="row js-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'>
    <div className="grid-sizer col-md-6 col-sm-6"></div>
    <div className="grid-item col-md-6 col-sm-6">
      <div className="media-grid">
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-1">
          <img src="images/post-images/6.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 63</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 12</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-8.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Richard Bell</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-1" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
                <div className="post-container">
                  <img src="images/users/user-5.jpg" alt="user" className="profile-photo-md pull-left" />
                  <div className="post-detail">
                    <div className="user-info">
                      <h5><a href="timeline.html" className="profile-link">Alexis Clark</a> <span className="following">following</span></h5>
                      <p className="text-muted">Published a photo about 3 mins ago</p>
                    </div>
                    <div className="reaction">
                      <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 13</a>
                      <a href="#c"className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
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
          <img src="images/post-images/3.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 100</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 99</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-5.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Sarah Cruiz</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-2" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
          <img src="images/post-images/5.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 233</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 30</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-7.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Robert Cook</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-3" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
          <img src="images/post-images/2.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 73</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 4</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">John Doe</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-4" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
          <img src="images/post-images/4.jpg" alt="" className="img-responsive post-image" />
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
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
          <img src="images/post-images/7.jpg" alt="" className="img-responsive post-image" />
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
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
          <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 55</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 2</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-5.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Alexis Clark</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

        
        <div className="modal fade modal-7" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-8">
          <img src="images/post-images/9.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 81</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 1</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-2.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Linda Lohan</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>

      
        <div className="modal fade modal-8" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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
        <div className="img-wrapper" data-toggle="modal" data-target=".modal-9">
          <img src="images/post-images/8.jpg" alt="" className="img-responsive post-image" />
        </div>
        <div className="media-info">
          <div className="reaction">
            <a href="#c" className="btn text-green"><i className="fa fa-thumbs-up"></i> 47</a>
            <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 9</a>
          </div>
          <div className="user-info">
            <img src="images/users/user-5.jpg" alt="" className="profile-photo-sm pull-left" />
            <div className="user">
              <h6><a href="#c" className="profile-link">Julia Cox</a></h6>
              <a className="text-green" href="#c">Friend</a>
            </div>
          </div>
        </div>


        <div className="modal fade modal-9" tabindex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="post-content">
                <img src="images/post-images/1.jpg" alt="" className="img-responsive post-image" />
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

export default Images;