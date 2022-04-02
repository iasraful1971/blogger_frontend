/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Link } from "react-router-dom";

const CreateAt = () => {
  return (
    <section id="copyright">
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="left-side">
                <ul className="link-list">
                  <li>
                    <span>Copyright  &copy; 2022 Blogger. Developed by</span>
                  </li>
                  <li>
                    <a
                      rel="noreferrer"
                      href="https://asraful-dev.netlify.app/"
                      target="_blank"
                    >
                      Md Asraful
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <div className="right-side">
                <ul className="link-list">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAt;
