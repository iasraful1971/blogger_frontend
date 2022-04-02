/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AiFillDislike, AiFillLike, AiFillTag } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FaDribbbleSquare, FaFacebookSquare, FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import Comments from "./Comments";
const ArticleDetails = () => {
  return (
    <div className="article-details">
      <div className="path">
        <Link to="/">Home</Link>
        <span className="arrow">
          <BsChevronRight />
        </span>
        <Link to="/">Algorithom</Link>
        <span className="arrow">
          <BsChevronRight />
        </span>
        <Link to="/">Bangladesh is most popular country form foreginer</Link>
      </div>

      <div className="title">
        <h2>
          <Link to="/">Bangladesh is most popular country form foreginer</Link>
        </h2>
      </div>
      <div className="auth-time">
        <div className="auth">
          <h4>
            <AiFillTag />
          </h4>
          <span>
            <Link to="/">Programming</Link>
          </span>
        </div>
        <div className="time">
          <span>2 june 2022</span>
        </div>
      </div>

      <div className="home-article-image">
        <img
          src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_65-1296x700.jpg"
          alt=""
        />
      </div>
      <div className="home-article-text">
        <p>
          hen an unknown printer took a galley of type and their scrambled
          imaketype specimen book has follorrvived not only fiver centuriewhen
          an unknown printer took a galley of type and scrambled it to make a
          type specimen book. It has survived not only five centuries but also
          the leap into electronic typesetting, remaining essentially unchanged.
          Travel orem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a gallery Followe yof
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronics are o nic
          typesetting, remaining essentially unchanged. Mravel orem Ipsum has
          been the industry’s standard dummy text ever since the 1500s, when an
          unknown printer took a galleyof typed scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electro nic typesetting, remain ing essentially unchanged.
        </p>
        <p>
          <img
            src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg"
            alt=""
          />
        </p>
        <p>
          wn printer took a galleyof typed scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electro nic typesetting, remain ing essentially unchanged.
        </p>
        <p>
          <iframe
            width="727"
            height="409"
            src="https://www.youtube.com/embed/gv_EOdsbibk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </p>
      </div>
      <div className="like-dislike-view">
      <div className="like-dislike">
        <div className="dislike">
          <button className="icon red">
            <AiFillDislike />
          </button>
          {/* <button disabled className="icon">
            <AiFillDislike />
          </button> */}
          <div className="like-number">12</div>
        </div>
        <div className="like">
          <button className="icon blue">
            <AiFillLike />
          </button>
          {/* <button disabled className="icon">
            <AiFillLike />
          </button> */}
          <div className="dislike-number">12</div>
        </div>
      </div>
      <div className="view">
          <span>
              250
          </span>
          <span>views</span>
      </div>
      </div>

      <div className="read-more">
          <span>read more</span>
          <Link  to="/">
              Bangladesh is a beautiful country and that is..
          </Link>
      </div>
      
      <div className="more-tags">
        <span>tags</span>
          <Link to="/">Computer</Link>
          <Link to="/">Js</Link>
          <Link to="/">Computer</Link>
      </div>
      <div className="social-icons">
        <a className="l1" href="#">
          <FaFacebookSquare/>
        </a>
        <a className="l2" href="#">
          <FaTwitterSquare/>
        </a>
        <a className="l3" href="#">
          <FaLinkedin/>
        </a>
        <a className="l4" href="#">
          <FaGithub/>
        </a>
        <a className="l5" href="#">
          <FaDribbbleSquare/>
        </a>

      </div>
      <div className="related-articles">
        <div className="more">
          <h3>Related articles</h3>
        </div>
        <div className="articles">
          <Link className="article" to="/">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg" alt="" />
            <span>
            Bangladesh is a beautiful country in the world and okey
            </span>
          </Link>
          <Link className="article" to="/">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg" alt="" />
            <span>
            Bangladesh is a beautiful country in the world and okey
            </span>
          </Link>
          <Link className="article" to="/">
            <img src="https://radiustheme.com/demo/wordpress/themes/neeon/wp-content/uploads/2021/12/blog_52-220x175.jpg" alt="" />
            <span>
            Bangladesh is a beautiful country in the world and okey
            </span>
          </Link>
         
        </div>
      </div>
      <div className="comment-title">
        <h3>Article Comments</h3>

      </div>
      <Comments/>
    </div>
  );
};

export default ArticleDetails;
