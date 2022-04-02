import React from "react";
import { BsAt } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import Navbar from "../home/Navbar";
const AdminLogin = () => {
  return (
    <>
      <Navbar />
      <div className="admin_login">
        <div className="card">
          <div className="auth">
            <h3>Admin Login</h3>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="icon-input">
                  <div className="icon">
                    <BsAt />
                  </div>
                  <input
                    placeholder="email"
                    type="email"
                    required
                    name="email"
                    id="email"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="icon-input">
                  <div className="icon">
                    <FaLock />
                  </div>
                  <input
                    placeholder="password"
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="form-group">
                <button className="btn btn-block">Admin login</button>
                <button className="btn btn-block">
                    <div className="spinner">
                        <div className="spinner1"></div>
                        <div className="spinner2"></div>
                        <div className="spinner3"></div>
                    </div>
                </button>
              </div>
              
            </form>
          </div>
          <div className="img-logo">
            <lottie-player
              className="img"
              src="https://assets2.lottiefiles.com/packages/lf20_ktk3nph7.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
