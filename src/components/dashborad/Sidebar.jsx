import React from "react";
import { AiFillDashboard, AiOutlineComment } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import {
  FaEye,
  FaPlusCircle,
  FaRegCaretSquareRight,
  FaTag,
  FaUser
} from "react-icons/fa";
import { RiArticleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="dashboard-main-content-sidebar">

      <ul>
        <input type="checkbox" id="article" />
        <input type="checkbox" id="category" />
        <input type="checkbox" id="tag" />
        <input type="checkbox" id="user" />
        <li>
          <Link to="/dashboard">
            <label>
              <h3>
                <span>
                  <AiFillDashboard />
                </span>
                <span>Dashboard</span>
              </h3>
            </label>
          </Link>
        </li>
        <li>
          <label htmlFor="article">
            <h3>
              <span>
                <RiArticleLine />
              </span>
              <span>Articles</span>
            </h3>
            <span>
              <BsChevronRight className="right_icon1" />
            </span>
          </label>
          <div className="article-category">
            <Link to="/dashboard/all-articles">
              <span>
                <FaEye />
              </span>
              <span>All Articles</span>
            </Link>
            <Link to="/dashboard/article-add">
              <span>
                <FaPlusCircle />
              </span>
              <span>Add Article</span>
            </Link>
          </div>
        </li>


        <li>
          <label htmlFor="category">
            <h3>
              <span>
                <FaRegCaretSquareRight />
              </span>
              <span>Categories</span>
            </h3>
            <span>
              <BsChevronRight className="right_icon2" />
            </span>
          </label>
          <div className="category-category">
            <Link to="/dashboard/all-category">
              <span>
                <FaEye />
              </span>
              <span>All Categories</span>
            </Link>
            <Link to="/dashboard/add-category">
              <span>
                <FaPlusCircle />
              </span>
              <span>Add Categiries</span>
            </Link>
          </div>
        </li>
        <li>
          <label htmlFor="tag">
            <h3>
              <span>
                <FaTag />
              </span>
              <span>tags</span>
            </h3>
            <span>
              <BsChevronRight className="right_icon3" />
            </span>
          </label>
          <div className="tag-category">
            <Link to="/dashboard/all-tag">
              <span>
                <FaEye />
              </span>
              <span>All Tags</span>
            </Link>
            <Link to="/dashboard/add-tag">
              <span>
                <FaPlusCircle />
              </span>
              <span>Add Tag</span>
            </Link>
          </div>
        </li>

        <li>
          <label htmlFor="user">
            <h3>
              <span>
                <FaUser />
              </span>
              <span>Users</span>
            </h3>
            <span>
              <BsChevronRight className="right_icon4" />
            </span>
          </label>
          <div className="user-category">
            <Link to="/dashboard/all-user">
              <span>
                <FaEye />
              </span>
              <span>All users</span>
            </Link>
            <Link to="/dashboard/all-sub-admin">
              <span>
              <FaEye />
              </span>
              <span>All sub admin </span>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/dashboard/comments/ddsfd">
            <label>
              <h3>
                <span>
                  <AiOutlineComment />
                </span>
                <span>Comments</span>
              </h3>
            </label>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
