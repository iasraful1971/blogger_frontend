import React from "react";
import { Helmet } from "react-helmet";
import { FaEdit, FaRegEye, FaSearch, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";
const DashboardArticles = () => {
  const text =
    "hen an unknown printer took a galley of type and their scrambledhen an unknown printer took a gal .";
  return (
    <div className="dashboard-articles">
      <Helmet>
        <title>All articles</title>
      </Helmet>
      <div className="article-action-pagination">
        <div className="numOf-search-newAdd">
          <div className="numOf">
            <h2>Article (22)</h2>
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
            <Link className="btn" to="/dashboard/article-add">
              Add New
            </Link>
          </div>
        </div>
        <div className="height-70vh">
          <div className="articles">
            <div className="article">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg"
                alt=""
              />
              <Link to="/article/details/bang">
                The printer took a galley of typed slim.
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link to="/dashboard/article/edit/articleSlug">
                    <FaEdit />
                  </Link>
                </span>
                <span>
                  <FaRegEye />
                </span>
                <span>
                  <FaTrash />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg"
                alt=""
              />
              <Link to="/article/details/bang">
                The printer took a galleyof typed slim.
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link to="/">
                    <FaEdit />
                  </Link>
                </span>
                <span>
                  <FaRegEye />
                </span>
                <span>
                  <FaTrash />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg"
                alt=""
              />
              <Link to="/article/details/bang">
                The printer took a galleyof typed slim.
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link to="/">
                    <FaEdit />
                  </Link>
                </span>
                <span>
                  <FaRegEye />
                </span>
                <span>
                  <FaTrash />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg"
                alt=""
              />
              <Link to="/article/details/bang">
                The printer took a galleyof typed slim.
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link to="/">
                    <FaEdit />
                  </Link>
                </span>
                <span>
                  <FaRegEye />
                </span>
                <span>
                  <FaTrash />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg"
                alt=""
              />
              <Link to="/article/details/bang">
                The printer took a galleyof typed slim.
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link to="/">
                    <FaEdit />
                  </Link>
                </span>
                <span>
                  <FaRegEye />
                </span>
                <span>
                  <FaTrash />
                </span>
              </div>
            </div>
            <div className="article">
              <img
                src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_64-960x520.jpg"
                alt=""
              />
              <Link to="/article/details/bang">
                The printer took a galley of typed slim.
              </Link>
              <p>{text}</p>
              <div className="action">
                <span>
                  <Link to="/">
                    <FaEdit />
                  </Link>
                </span>
                <span>
                  <FaRegEye />
                </span>
                <span>
                  <FaTrash />
                </span>
              </div>
            </div>

            
          </div>
        </div>
        <Pagination/>
      </div>
    </div>
  );
};

export default DashboardArticles;
