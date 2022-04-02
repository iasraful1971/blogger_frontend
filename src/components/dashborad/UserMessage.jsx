import React from "react";
import { BsEnvelope } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
const UserMessage = () => {
  return (
    <div className="notifications">
      <div>
        <span>
          <BsEnvelope />
        </span>
        <div className="MCount">5</div>
      </div>
      <div className="notification show">
        <ul>
          <li>
            <a href="/">Asraful comment your article</a>
            <div className="Delete">
              <FaTrash />
            </div>
          </li>
          <li>
            <a href="/">Asraful comment your article</a>
            <div className="Delete">
              <FaTrash />
            </div>
          </li>
          <li>
            <a href="/">Asraful comment your article</a>
            <div className="Delete">
              <FaTrash />
            </div>
          </li>
          <li>
            <a href="/">Asraful comment your article</a>
            <div className="Delete">
              <FaTrash />
            </div>
          </li>
          <li>
            <a href="/">Asraful comment your article</a>
            <div className="Delete">
              <FaTrash />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMessage;
