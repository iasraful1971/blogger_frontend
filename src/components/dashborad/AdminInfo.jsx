import React from "react";
import { Link } from "react-router-dom";

const AdminInfo = () => {
  return (
    <div className="adminInfo">
      <div className="image-email">
        <img
          src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
          alt=""
        />
        <span>asraful@gmail.com</span>
      </div>
      <ul>
        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/">views side</Link>
        </li>
        <li>
          <span>log out</span>
        </li>
      </ul>
    </div>
  );
};

export default AdminInfo;
