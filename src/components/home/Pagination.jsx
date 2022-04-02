import React from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Pagination = () => {
  return (
    <div className="pagination">
      <ul>
        <li>
          <Link to="/">
            <BsChevronDoubleLeft />
          </Link>
        </li>
        <button className="not-hover" disabled>
          <span>
            <BsChevronDoubleLeft />
          </span>
        </button>

        <li className="active"><Link to="/">1</Link></li>
        <li><Link to="/">2</Link></li>
        <li><Link to="/">3</Link></li>
        <li><Link to="/">4</Link></li>
        <li><Link to="/">5</Link></li>

        <li>
          <Link to="/">
            <BsChevronDoubleRight />
          </Link>
        </li>
        <button className="not-hover" disabled>
          <span>
            <BsChevronDoubleRight />
          </span>
        </button>
      </ul>
    </div>
  );
};

export default Pagination;
