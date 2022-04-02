import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const EditTag = () => {

  return (
    <div className="add-category">
      <Helmet>
        <title>Edit tag</title>
      </Helmet>

      <div className="title-show-article">
        <h2>Edit Tag</h2>
        <Link className="btn" to="/dashboard/all-tag">
          All Tags
        </Link>
      </div>

     <div className="add">
     <form>
        <div className="form-group">
            <label htmlFor="categoryName">tag Name</label>
            <input type="text" className="form-control" id="categoryName" placeholder="tag name" />
            <p  className="error">Please give a tag name</p>
        </div>
        <div className="form-group">
            <label htmlFor="category-description">tag description</label>
           <textarea className="form-control message" name="category-description" id="category-description" placeholder="description" cols="30" rows="10"></textarea>
            <p  className="error">write something</p>
        </div>
        <div className="form-group button-category">
            <button className="btn">Update tag</button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default EditTag;