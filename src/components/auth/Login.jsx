import React from "react";
import { BsAt } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../home/Navbar";
const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login">
        <div className="card">
          <div className="auth">
            <h3>login</h3>
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
                <button className="btn btn-block">Login</button>
                <button className="btn btn-block">
                    <div className="spinner">
                        <div className="spinner1"></div>
                        <div className="spinner2"></div>
                        <div className="spinner3"></div>
                    </div>
                </button>
              </div>
            </form>

            <div className="or"> or</div>
            <div className="fb-google-auth">
              <div className="fb-google-logo">
                <div className="fb">
                  <button>
                    <FaFacebook />
                    <span>Sign up with facebook</span>
                  </button>
                </div>
                <div className="google">
                  <button>
                      <FaGoogle/>
                      <span>Sign up with google</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="login-page">
                <Link to="/register">New user? click here for register</Link>
            </div>
          </div>

          <div className="img-logo">
            <lottie-player
              className="img"
              src="https://assets4.lottiefiles.com/packages/lf20_yupefrh2.json"
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

export default Login;
