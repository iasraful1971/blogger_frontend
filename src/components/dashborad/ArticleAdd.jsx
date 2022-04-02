import JoditEditor from "jodit-react";
import React, { useRef, useState } from "react";
import Helmet from "react-helmet";
import { BsCardImage } from "react-icons/bs";
import { Link } from "react-router-dom";
const ArticleAdd = () => {
  const [text, setText] = useState("");
  const editor = useRef();
  const config = {
    readonly: false,
  };
  return (
    <div className="add-article">
      <Helmet>
        <title>Add article</title>
      </Helmet>
      <div className="add">
        <div className="title-show-article">
          <h2>Add Article</h2>
          <Link className="btn" to="/dashboard/all-articles">
            All article
          </Link>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="title">Article title</label>
            <input
              type="text"
              className="form-control"
              placeholder="article title"
              name="title"
              id="title"
            />
            <p className="error">please provide article title</p>
          </div>
          <div className="form-group">
            <label htmlFor="slug">Article slug</label>
            <input
              type="text"
              placeholder="article slug"
              name="slug"
              id="slug"
              className="form-control"
            />
            <p className="error">please provide article slug</p>
          </div>
          <button className="btn update">update</button>
          <div className="form-group">
            <label htmlFor="category">Category</label>
            <select className="form-control" name="category" id="category">
              <option value="category">---Select Article Category---</option>
              <option value="science">science</option>
              <option value="commerce">commerce</option>
              <option value="nature">nature</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
            <p className="error">please provide any category</p>
          </div>
          <div className="form-group">
            <label htmlFor="tag">tag</label>
            <select className="form-control" name="tag" id="tag">
              <option value="tag">--- Select Article tag---</option>
              <option value="science">Awesome</option>
              <option value="commerce">commerce</option>
              <option value="nature">nature</option>
              <option value="national">National</option>
              <option value="international">International</option>
            </select>
            <p className="error">please provide any tag</p>
          </div>
          <div className="form-group img_upload">
            <div className="upload">
              <label htmlFor="upload_image">
                <BsCardImage />
              </label>
              <input type="file" id="upload_image" />
            </div>
            <label htmlFor="article text">Article Text</label>
            <JoditEditor
              tableIndex={1}
              value={text}
              ref={editor}
              config={config}
              onBlur={newText => setText(newText)}
              onChange={newText => {}}
           />
             <p className="error">text editor has problem. </p>
          </div>
          <div className="form-group">
              <label htmlFor="image"> image   </label>
                  <div className="image-select">
                      <span>upload image</span>
                      <label htmlFor="image">
                          Select image
                      </label>
                      <input type="file" name="image" className="form-control" id="image" />
                  </div>
                  <div className="image">
                      <img style={{width:'78px', height:'78px' , borderRadius:'15px', objetFit:'cover'}} src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_27-551x431.jpg" alt="" />
                  </div>
            <p className="error">Image uploaded error</p>
          </div>

          <div className="form-group ">
              <div className="submit-btn">
              <button className="btn">
                  submit article
              </button>
              </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ArticleAdd;
