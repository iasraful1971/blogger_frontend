import React, { useRef, useState } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
import { Link, Route, Switch } from "react-router-dom";
import ArticleDetails from "./ArticleDetails";
import CategoriesArticles from "./CategoriesArticles";
import CreateAt from "./CreateAt";
import Footer from "./Footer";
import HomeArticles from "./HomeArticles";
import Navbar from "./Navbar";
import PopularArticles from "./PopularArticles";
import TagArticles from "./TagArticles";

const Home = ({ history }) => {
  const [searchValue, setSearchValue] = useState("");
  const nav = useRef();
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/article/search/${searchValue}`);
  };

  const scrollTop = () => {
    nav.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="home">
        <Navbar nav={nav} />
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <Switch>
                  <Route
                    path="/article/search/:searchValue"
                    component={HomeArticles}
                    exact
                  />

                  <Route path="/" component={HomeArticles} exact />

                  <Route
                    path="/article/:currentPage?"
                    component={HomeArticles}
                    exact
                  />
                  <Route
                    path="/article/details/:slug"
                    component={ArticleDetails}
                    exact
                  />
                  <Route
                    path="/article/category/:categorySlug/:currentPage?"
                    component={CategoriesArticles}
                    exact
                  />
                  <Route
                    path="/article/tag/:tagSlug/:currentPage?"
                    component={TagArticles}
                    exact
                  />
                </Switch>
              </div>
              <div className="col-4">
                <div className="search-category-tag">
                  <div className="search">
                    <h2>Search</h2>
                    <div className="form-group">
                      <input
                        onChange={(e) => setSearchValue(e.target.value)}
                        type="search"
                        placeholder="search by name or category"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <button onClick={handleSearch} className="btn btn-block">
                        search
                      </button>
                    </div>
                  </div>

                  <div className="popular-article">
                    <div className="title">
                      <h3>Popular Articles</h3>
                    </div>
                    <PopularArticles />
                  </div>

                  <div className="follow-facebook">
                    <div className="title">
                      <h3>Following Me</h3>
                    </div>
                    <div className="image">
                      <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FF-a-N-u-S-H-104236564649552%2F&tabs=timeline&width=340&height=140&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                        style={{
                          width: "340px",
                          height: "140px",
                          border: "none",
                          overflow: "hidden",
                          scrolling: "no",
                          frameborder: "0",
                          allowfullscreen: "true",
                          allow:
                            "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share",
                        }}
                      ></iframe>
                    </div>
                  </div>

                  <div className="categories">
                    <div className="title">
                      <h3>Categories</h3>
                    </div>
                    <ul className="cate-list">
                      <div className="cate-item">
                        <li>
                          <FaChevronRight />
                          <Link to="/">Art</Link>
                        </li>
                        <span>(5)</span>
                      </div>
                      <div className="cate-item">
                        <li>
                          <FaChevronRight />
                          <Link to="/">Science & nature</Link>
                        </li>
                        <span>(5)</span>
                      </div>

                      <div className="cate-item">
                        <li>
                          <FaChevronRight />
                          <Link to="/">Programing</Link>
                        </li>
                        <span>(5)</span>
                      </div>
                    </ul>
                  </div>

                  <div className="tags">
                    <div className="title">
                      <h3>Tags</h3>
                    </div>
                    <ul>
                      <li>
                        <Link to="/">programming</Link>
                      </li>
                      <li>
                        <Link to="/">nature</Link>
                      </li>
                      <li>
                        <Link to="/">art</Link>
                      </li>
                      <li>
                        <Link to="/">programming</Link>
                      </li>
                      <li>
                        <Link to="/">algorithom</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <CreateAt />
        <div onClick={scrollTop} id="scroll">
          <button className="scroll-btn">
            <span>
              <BsChevronDoubleUp />
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
