import React from "react";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const AddCategory = () => {

  return (
    <div className="add-category">
      <Helmet>
        <title>Add Category</title>
      </Helmet>

      <div className="title-show-article">
        <h2>Add Category</h2>
        <Link className="btn" to="/dashboard/all-category">
          All Category
        </Link>
      </div>

     <div className="add">
     <form>
        <div className="form-group">
            <label htmlFor="categoryName">Category Name</label>
            <input type="text" className="form-control" id="categoryName" placeholder="category name" />
            <p  className="error">Please give a category name</p>
        </div>
        <div className="form-group">
            <label htmlFor="category-description">Category description</label>
           <textarea className="form-control message" name="category-description" id="category-description" placeholder="description" cols="30" rows="10"></textarea>
            <p  className="error">write something</p>
        </div>
        <div className="form-group button-category">
            <button className="btn">Add Category</button>
        </div>
      </form>
     </div>
    </div>
  );
};

export default AddCategory;
