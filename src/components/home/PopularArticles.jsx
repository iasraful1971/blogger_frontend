import React from 'react';
import { Link } from 'react-router-dom';

const PopularArticles = () => {
    return (
        <>
      
      
        <div className='row'>
            <div className="col-4">
                <Link className='image' to="/">
                    <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg" alt="" />
                </Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to="/">
                    Crafty Cook and Decorate all of our food dishes with love <br />
                    <span>22 May, 2022</span>
                    </Link><br />
                    <Link className='category' to="/">
                        <span>technology</span>
                    </Link>
                </div>
            </div>
        </div>
      
        <div className='row'>
            <div className="col-4">
                <Link className='image' to="/">
                    <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg" alt="" />
                </Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to="/">
                    Crafty Cook and Decorate all of our food dishes with love <br />
                    <span>22 May, 2022</span>
                    </Link><br />
                    <Link className='category' to="/">
                        <span>technology</span>
                    </Link>
                </div>
            </div>
        </div>
      
     
      
        <div className='row'>
           <div className="col-4">
                <Link className='image' to="/">
                    <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg" alt="" />
                </Link>
            </div>
            <div className="col-8">
                <div className="title-time">
                    <Link to="/">
                    Crafty Cook and Decorate all of our food dishes with love <br />
                    <span>22 May, 2022</span>
                    </Link><br />
                    <Link className='category' to="/">
                        <span>prgramme</span>
                    </Link>
                </div>
            </div>
        </div>
      
      
   
        
        </>
    );
};

export default PopularArticles;