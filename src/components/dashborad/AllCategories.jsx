import React from "react";
import Helmet from "react-helmet";
import { FaEdit, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";
const AllCategories = () => {
  return (
    <div className="all-category">
      <Helmet>
        <title>All Categories</title>
      </Helmet>

      <div className="show-category-action">
        <div className="numOf-search-newAdd">
          <div className="numOf">
            <h2>Categories (22)</h2>
          </div>
          <div className="searchOf">
            <div className="search">
              <input
                type="text"
                placeholder="search article"
                className="form-control"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/add-category">
              Add New
            </Link>
          </div>
        </div>
        <div className="height-60vh">
          <div className="categories">
            <div className="category">
              <div className="name">Category</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/dsdd">
                    <FaEdit />
                  </Link>
                </span>
                <span><FaTrash/></span>
              </div>
            </div>
            <div className="category">
              <div className="name">Category</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:dghds">
                    <FaEdit />
                  </Link>
                </span>
                <span><FaTrash/></span>
              </div>
            </div>
            <div className="category">
              <div className="name">Category</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:dghds">
                    <FaEdit />
                  </Link>
                </span>
                <span><FaTrash/></span>
              </div>
            </div>
            <div className="category">
              <div className="name">Category</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:dghds">
                    <FaEdit />
                  </Link>
                </span>
                <span><FaTrash/></span>
              </div>
            </div>
            <div className="category">
              <div className="name">Category</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:dghds">
                    <FaEdit />
                  </Link>
                </span>
                <span><FaTrash/></span>
              </div>
            </div>
            <div className="category">
              <div className="name">Category</div>
              <div className="action">
                <span>
                  <Link to="/dashboard/category/edit/:dghds">
                    <FaEdit />
                  </Link>
                </span>
                <span><FaTrash/></span>
              </div>
            </div>
          </div>
        </div>
        <Pagination/>
      </div>
    </div>
  );
};

export default AllCategories;
