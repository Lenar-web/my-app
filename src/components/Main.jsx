import React from 'react';

let Main = () => {
  return (

<div id="page-contents">
    	<div className="container">
    		<div className="row">

    			<div className="col-md-3 static">
            <div className="profile-card">
            	<img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
            	<h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
            	<a href="#c" className="text-white"><i className="ion ion-android-person-add"></i> 1,299 followers</a>
            </div>

            <ul className="nav-news-feed">
              <li><i className="icon ion-ios-paper"></i><div><a href="newsfeed.html">My Newsfeed</a></div></li>
              <li><i className="icon ion-ios-people"></i><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
              <li><i className="icon ion-ios-people-outline"></i><div><a href="newsfeed-friends.html">Friends</a></div></li>
              <li><i className="icon ion-chatboxes"></i><div><a href="newsfeed-messages.html">Messages</a></div></li>
              <li><i className="icon ion-images"></i><div><a href="newsfeed-images.html">Images</a></div></li>
              <li><i className="icon ion-ios-videocam"></i><div><a href="newsfeed-videos.html">Videos</a></div></li>
            </ul>

            <div id="chat-block">
              <div className="title">Chat online</div>
              <ul className="online-users list-inline">
                <li><a href="newsfeed-messages.html" title="Linda Lohan"><img src="images/users/user-2.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Sophia Lee"><img src="images/users/user-3.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="John Doe"><img src="images/users/user-4.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Alexis Clark"><img src="images/users/user-5.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="James Carter"><img src="images/users/user-6.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Robert Cook"><img src="images/users/user-7.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Richard Bell"><img src="images/users/user-8.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Anna Young"><img src="images/users/user-9.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
                <li><a href="newsfeed-messages.html" title="Julia Cox"><img src="images/users/user-10.jpg" alt="user" className="img-responsive profile-photo" /><span className="online-dot"></span></a></li>
              </ul>
            </div>
          </div>
    			<div className="col-md-7">

            
            <div className="create-post">
            	<div className="row">
            		<div className="col-md-7 col-sm-7">
                  <div className="form-group">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
                    <textarea name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Write what you wish"></textarea>
                  </div>
                </div>
            		<div className="col-md-5 col-sm-5">
                  <div className="tools">
                    <ul className="publishing-tools list-inline">
                      <li><a href="#c"><i className="ion-compose"></i></a></li>
                      <li><a href="#c"><i className="ion-images"></i></a></li>
                      <li><a href="#c"><i className="ion-ios-videocam"></i></a></li>
                      <li><a href="#c"><i className="ion-map"></i></a></li>
                    </ul>
                    <button className="btn btn-primary pull-right">Publish</button>
                  </div>
                </div>
            	</div>
            </div>


            <div className="post-content">
              <img src="images/post-images/1.jpg" alt="post-sdimage" className="img-responsive post-image" />
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
                    {/* <input type="text" className="form-control" placeholder="Post a comment"> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="post-content">
               {/* <video className="post-video" controls> <source src="videos/8.mp4" type="video/mp4"> </video> */}
              <div className="post-container">
                <img src="images/users/user-3.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                  <div className="user-info">
                    <h5><a href="timeline.html" className="profile-link">Sophia Lee</a> <span className="following">following</span></h5>
                    <p className="text-muted">Updated her status about 33 mins ago</p>
                  </div>
                  <div className="reaction">
                    <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 75</a>
                    <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 8</a>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                  <div className="line-divider"></div>
                   <div className="post-comment">
                    <img src="images/users/user-14.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Olivia </a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <i className="em em-anguished"></i> Ut enim ad minim veniam, quis nostrud </p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Sarah</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-2.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Linda</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    {/* <input type="text" className="form-control" placeholder="Post a comment"> */}
                  </div>
                </div>
              </div>
            </div>


            <div className="post-content">
              <div className="post-container">
                <img src="images/users/user-2.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                  <div className="user-info">
                    <h5><a href="timeline.html" className="profile-link">Linda Lohan</a> <span className="following">following</span></h5>
                    <p className="text-muted">Published a photo about 1 hour ago</p>
                  </div>
                  <div className="reaction">
                    <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 23</a>
                    <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 4</a>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-text">
                    <p><i className="em em-thumbsup"></i> <i className="em em-thumbsup"></i> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-comment">
                    <img src="images/users/user-12.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Cris </a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam <i className="em em-muscle"></i></p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    {/* <input type="text" className="form-control" placeholder="Post a comment"> */}
                  </div>
                </div>
              </div>
            </div>


            <div className="post-content">
              <img src="images/post-images/2.jpg" alt="post-images" className="img-responsive post-image" />
              <div className="post-container">
                <img src="images/users/user-4.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                  <div className="user-info">
                    <h5><a href="timeline.html" className="profile-link">John Doe</a> <span className="following">following</span></h5>
                    <p className="text-muted">Published a photo about 2 hour ago</p>
                  </div>
                  <div className="reaction">
                    <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 39</a>
                    <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 2</a>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-text">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-comment">
                    <img src="images/users/user-13.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Brian </a>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-8.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Richard</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    {/* <input type="text" className="form-control" placeholder="Post a comment"> */}
                  </div>
                </div>
              </div>
            </div>


            <div className="post-content">
              <div className="google-maps">
                <div id="map" className="map"></div>
              </div>
              <div className="post-container">
                <img src="images/users/user-3.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                  <div className="user-info">
                    <h5><a href="timeline.html" className="profile-link">Sophia Lee</a> <span className="following">following</span></h5>
                    <p className="text-muted"><i className="icon ion-ios-location"></i> Went to Niagara Falls today</p>
                  </div>
                  <div className="reaction">
                    <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 17</a>
                    <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-text">
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Sarah </a>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <i className="em em-blush"></i> <i className="em em-blush"></i> </p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    {/* <input type="text" className="form-control" placeholder="Post a comment"> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="post-content">
              <img src="images/post-images/11.jpg" alt="" className="img-responsive post-image" />
              <div className="post-container">
                <img src="images/users/user-9.jpg" alt="user" className="profile-photo-md pull-left" />
                <div className="post-detail">
                  <div className="user-info">
                    <h5><a href="timeline.html" className="profile-link">Anna Young</a> <span className="following">following</span></h5>
                    <p className="text-muted">Published a photo about 4 hour ago</p>
                  </div>
                  <div className="reaction">
                    <a href="#c" className="btn text-green"><i className="icon ion-thumbsup"></i> 2</a>
                    <a href="#c" className="btn text-red"><i className="fa fa-thumbs-down"></i> 0</a>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-text">
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.</p>
                  </div>
                  <div className="line-divider"></div>
                  <div className="post-comment">
                    <img src="images/users/user-10.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Julia </a>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                  </div>
                  <div className="post-comment">
                    <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                    {/* <input type="text" className="form-control" placeholder="Post a comment"> */}
                  </div>
                </div>
              </div>
            </div>
          </div>


    			<div className="col-md-2 static">
            <div className="suggestions" id="sticky-sidebar">
              <h4 className="grey">Who to Follow</h4>
              <div className="follow-user">
                <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm pull-left" />
                <div>
                  <h5><a href="timeline.html">Diana Amber</a></h5>
                  <a href="#c" className="text-green">Add friend</a>
                </div>
              </div>
              <div className="follow-user">
                <img src="images/users/user-12.jpg" alt="" className="profile-photo-sm pull-left" />
                <div>
                  <h5><a href="timeline.html">Cris Haris</a></h5>
                  <a href="#c" className="text-green">Add friend</a>
                </div>
              </div>
              <div className="follow-user">
                <img src="images/users/user-13.jpg" alt="" className="profile-photo-sm pull-left" />
                <div>
                  <h5><a href="timeline.html">Brian Walton</a></h5>
                  <a href="#c" className="text-green">Add friend</a>
                </div>
              </div>
              <div className="follow-user">
                <img src="images/users/user-14.jpg" alt="" className="profile-photo-sm pull-left" />
                <div>
                  <h5><a href="timeline.html">Olivia Steward</a></h5>
                  <a href="#c" className="text-green">Add friend</a>
                </div>
              </div>
              <div className="follow-user">
                <img src="images/users/user-15.jpg" alt="" className="profile-photo-sm pull-left" />
                <div>
                  <h5><a href="timeline.html">Sophia Page</a></h5>
                  <a href="#c" className="text-green">Add friend</a>
                </div>
              </div>
            </div>
          </div>
    		</div>
    	</div>
    </div>

  );
}

export default Main;