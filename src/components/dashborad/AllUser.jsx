import React from "react";
import Helmet from "react-helmet";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../home/Pagination";
const AllUser = () => {
  const user = "admin";
  const status = "block";
  return (
    <div className="all-sub-admin">
      <Helmet>
        <title>All  Users</title>
      </Helmet>
      <div className="elements-numberOf-search-add_new">
        <div className="numOf-search-newAdd">
          <div className="numOf">
            <h2>users (2202)</h2>
          </div>
          <div className="searchOf">
            <div className="search">
              <input
                type="text"
                placeholder="search user"
                className="form-control"
              />
            </div>
            <span>
              <FaSearch />
            </span>
          </div>
          <div className="newAdd">
            <Link className="btn" to="/dashboard/all-sub-admin">
              Sub Admins
            </Link>
          </div>
        </div>
        <div className="loading-elements">
          <div className="elements">
          <div className="table-wrapper">
            <table>
              <thead>
                <tr className="tr">
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">

                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>Block</span>
                  }
                    {user === "admin" ?<span>Make sub-admin</span>: "" }


                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
                <tr>
                  <td data-label="No">1</td>
                  <td data-label="Name">Md Asraful</td>
                  <td data-label="Email">iasraful@gmail.com</td>
                  <td data-label="Image">
                    <img
                      className="image"
                      src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg"
                      alt=""
                    />
                  </td>
                  <td data-label="Actions">
                  {
                    status === "block"? <span className="unSus">UnBlock</span> : <span>block</span>
                  }
                  {user === "admin" ?<span>Make sub-admin</span>: "" }
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <Pagination/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
