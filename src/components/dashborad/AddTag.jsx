import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const AddTag = () => {

  return (
    <div className="add-category">
      <Helmet>
        <title>Add Tag</title>
      </Helmet>

      <div className="title-show-article">
        <h2>Add tag</h2>
        <Link className="btn" to="/dashboard/all-tag">
          All Tag
        </Link>
      </div>

     <div className="add">
     <form>
        <div className="form-group">
            <label htmlFor="categoryName">Tag Name</label>
            <input type="text" className="form-control" id="categoryName" placeholder="tag name" />
            <p  className="error">Please give a Tag name</p>
        </div>
        <div className="form-group">
            <label htmlFor="category-description">Tag description</label>
           <textarea className="form-control message" name="category-description" id="category-description" placeholder="description" cols="30" rows="10"></textarea>
            <p  className="error">write something</p>
        </div>
        <div className="form-group button-category">
            <button className="btn">Add Tag</button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default AddTag;
