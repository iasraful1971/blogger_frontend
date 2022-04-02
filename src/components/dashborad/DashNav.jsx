import React from "react";
import { BsBell, BsListUl } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import AdminInfo from "./AdminInfo";
import UserMessage from "./UserMessage";
const DashNav = () => {
  return (
    <>
      <div className="dashboard-navbar">
        <div className="dashboard-navbar-left">
          <label htmlFor="" className="dash">
            <span>D</span>
          </label>
          <label htmlFor="sidebar" className="bar">
            <span>
              <BsListUl />
            </span>
          </label>
          <h2>
            <Link to="/dashboard">Md Asraful</Link>
          </h2>
        </div>
        <div className="dashboard-navbar-right">
          <h2>
            <Link to="/">
              <span>Visit Site</span>
            </Link>
          </h2>
          <div className="search">
            <input
              type="search"
              name=""
              className="form-control"
              placeholder="search"
              id=""
            />
          </div>
          <div className="user">
            <div className="notification-message">

              
              <div className="notifications">
                <div>
                  <span>
                    <BsBell />
                  </span>
                  <div className="nCount">45</div>
                </div>
                <div className="notification show">
                  <ul>
                    <li>
                      <Link to="/">Asraful comment your article</Link>
                      <div className="Delete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Asraful comment your article</Link>
                      <div className="Delete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Asraful comment your article</Link>
                      <div className="Delete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Asraful comment your article</Link>
                      <div className="Delete">
                        <FaTrash />
                      </div>
                    </li>
                    <li>
                      <Link to="/">Asraful comment your article</Link>
                      <div className="Delete">
                        <FaTrash />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              
              <div className="messages">
                <UserMessage />
              </div>

              
            </div>
            <label htmlFor="adminInfo">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                alt=""
              />
            </label>
            <div className="name-time">
              <h3>Md Asraful</h3>
              <span>12 june, 2022</span>
            </div>
          </div>
        </div>
      </div>
      <AdminInfo />
    </>
  );
};

export default DashNav;
