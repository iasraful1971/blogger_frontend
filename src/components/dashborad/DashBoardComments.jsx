import React from 'react';
import Helmet from 'react-helmet';
import { BsTrash } from "react-icons/bs";
import Pagination from '../home/Pagination';
const DashBoardComments = () => {
    return (
        <div className='dashboard-comments'>
            <Helmet>
                <title>All comments</title>
            </Helmet>
            <div className="comments">
                <h2>Articles comments</h2>
                <div className="main-reply-comment">
        <div className="image-comment-time-name">
          <img
            src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
            alt=""
          />
          <div className="name-time-comment">
            <div className="name-time">
              <h4>Md Asraful alam</h4>
              <span>10 days ago</span>
            </div>
            <p>
              If you went places couldIf you went round the world whichround the
              world which places couldIf you went round the world wh places
              could.
            </p>
            <div className="reply-button">
              <button>reply</button>
            </div>
            <div className="reply-box">
              <div className="image-input">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                  alt=""
                />
                <input type="text" placeholder="add a public reply" required />
              </div>
              <div className="reply-submit">
                <button className="cancel">Cancel</button>
                <button className="submit">Submit</button>
              </div>
            </div>
            <div className="reply-comment">
              <div className="reply-comment-image-name-time">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                  alt=""
                />
                <div className="name-time-comment">
                  <div className="name-time">
                    <h4>Md Asraful alam</h4>
                    <span>10 days ago</span>
                  </div>
                  <p>Thank you so much sir..</p>
                  <div className="reply-button">
                    <button>reply</button>
                  </div>
                  <div className="reply-box">
                    <div className="image-input">
                      <img
                        src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                        alt=""
                      />
                      <input
                        type="text"
                        placeholder="add a public reply"
                        required
                      />
                    </div>
                    <div className="reply-submit">
                      <button className="cancel">Cancel</button>
                      <button className="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <BsTrash />
              </div>
            </div>
            <div className="reply-comment">
              <div className="reply-comment-image-name-time">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                  alt=""
                />
                <div className="name-time-comment">
                  <div className="name-time">
                    <h4>Md Asraful alam</h4>
                    <span>10 days ago</span>
                  </div>
                  <p>Thank you so much sir..</p>
                  <div className="reply-button">
                    <button>reply</button>
                  </div>
                  <div className="reply-box">
                    <div className="image-input">
                      <img
                        src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                        alt=""
                      />
                      <input
                        type="text"
                        placeholder="add a public reply"
                        required
                      />
                    </div>
                    <div className="reply-submit">
                      <button className="cancel">Cancel</button>
                      <button className="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <BsTrash />
              </div>
            </div>
            <div className="reply-comment">
              <div className="reply-comment-image-name-time">
                <img
                  src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                  alt=""
                />
                <div className="name-time-comment">
                  <div className="name-time">
                    <h4>Md Asraful alam</h4>
                    <span>10 days ago</span>
                  </div>
                  <p>Thank you so much sir..</p>
                  <div className="reply-button">
                    <button>reply</button>
                  </div>
                  <div className="reply-box">
                    <div className="image-input">
                      <img
                        src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_49-220x175.jpg"
                        alt=""
                      />
                      <input
                        type="text"
                        placeholder="add a public reply"
                        required
                      />
                    </div>
                    <div className="reply-submit">
                      <button className="cancel">Cancel</button>
                      <button className="submit">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action">
                <BsTrash />
              </div>
            </div>
          
          </div>
        </div>
        <div className="action">
          <BsTrash />
        </div>
              </div>
              <div className="comment-pagination">
                  <Pagination/>
              </div>
            </div>
            
        </div>
    );
};

export default DashBoardComments;