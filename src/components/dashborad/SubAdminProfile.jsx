import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const SubAdminProfile = () => {
  return (
    <div className="sub-admin-profile">
      <Helmet>
        <title>Sub admin profile</title>
      </Helmet>
      <div className="profile-content">
      <div className="numOf-search-newAdd">
          <div className="numOf">
            <h2>Profile</h2>
          </div>
         
          <div className="newAdd">
            <Link className="btn" to="/dashboard/all-sub-admin">
              see all sub admins
            </Link>
          </div>
        </div>
      
        <div className="avatar-profile">
          <div className="profile-image">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg" alt="" />
          </div>
          <div className="profile-text">
            <h6>Name :   Md Asraful</h6>
            <p>Email:- iasraful107@gmail.com</p>
            <p>Role:- sub admin</p>
            <p>Account created : 22 july 2021</p>
            <p>article write: 3</p>
          </div>
        </div>
        <div className="heading">
          <h3>#Article Details</h3>
        </div>
        <div className="articles">
          <Link to="/" className="article">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg" alt="" />
            <h2>There was some resion of anglo.</h2>
            <p>the wesite is renkwed by the mmenbership of the eden</p>
            <div className="flex">
              <span className="category">Science</span>
              <span className="date">10 june, 2020</span>
            </div>
          </Link>
          <Link to="/" className="article">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg" alt="" />
            <h2>There was some resion of anglo.</h2>
            <p>the wesite is renkwed by the mmenbership of the eden</p>
            <div className="flex">
              <span className="category">Science</span>
              <span className="date">10 june, 2020</span>
            </div>
          </Link>
          <Link to="/" className="article">
            <div className="image"> <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg" alt="" /></div>
            <h2>There was some resion of anglo.</h2>
            <p>the wesite is renkwed by the mmenbership of the eden</p>
            <div className="flex">
              <span className="category">Science</span>
              <span className="date">10 june, 2020</span>
            </div>
          </Link>
          <Link to="/" className="article">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg" alt="" />
            <h2>There was some resion of anglo.</h2>
            <p>the wesite is renkwed by the mmenbership of the eden</p>
            <div className="flex">
              <span className="category">Science</span>
              <span className="date">10 june, 2020</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SubAdminProfile;
