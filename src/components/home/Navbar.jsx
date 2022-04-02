import { BsListUl } from "react-icons/bs";
import {
  FaDribbble,
  FaFacebookSquare,
  FaGithub,
  FaLinkedinIn,
  FaTwitter
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../images/logo (1).png";
const Navbar = ({nav}) => {
  return (
    <div ref={nav} className="navbar" id="navbar">
      <div className="container">
        <div className="row">
        <input type="checkbox" id="toggle" />
          <div className="col-4">
           
            <div className="image-menubar">
              <Link className="image" to="/">
                <img src={logo} alt="" />
              </Link>
              <label className="menu_icon" htmlFor="toggle">
                  <BsListUl/>
              </label>
            </div>
          </div>
          <div className="col-8">
            <ul className="link-list toggle">
              <li className="link-item">
                <Link to="/about">About</Link>
              </li>
              <li className="link-item">
                <Link to="/about">Contact</Link>
              </li>
              <li className="link-item">
                <Link to="/about">Policy</Link>
              </li>
                <div className="social-icons">
                <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaTwitter />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaFacebookSquare />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaGithub />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaLinkedinIn />
                  </span>
                </Link>
              </li>
              <li className="link-item">
                <Link to="/about">
                  <span>
                    <FaDribbble />
                  </span>
                </Link>
              </li>
            
                </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
