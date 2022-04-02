import React from "react";
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";
import AddCategory from "./AddCategory";
import AddTag from "./AddTag";
import AllCategories from "./AllCategories";
import AllSubAdmin from "./AllSubAdmin";
import AllTag from "./AllTag";
import AllUser from "./AllUser";
import ArticleAdd from "./ArticleAdd";
import DashboardArticles from "./DashboardArticles";
import DashBoardComments from "./DashBoardComments";
import DashboardIndex from "./DashboardIndex";
import DashNav from "./DashNav";
import EditArticle from "./EditArticle";
import EditCategory from "./EditCategory";
import EditTag from "./EditTag";
import Sidebar from "./Sidebar";
import SubAdminProfile from "./SubAdminProfile";

const Dashboard = () => {
  return (
    <div className="dashboard">
         <Helmet>
                <title>Dashboard</title>
            </Helmet>
      <DashNav />
      
      <div className="dashboard-main-content">
        <Sidebar/>
        <Switch>
        <Route path="/dashboard" component={DashboardIndex} exact />
        
        <Route path="/dashboard/all-articles/:currentPage?" exact component={DashboardArticles}  />
        <Route path="/dashboard/article-add" component={ArticleAdd}  />
        <Route path="/dashboard/article/edit/:articleSlug" exact component={EditArticle}  />
        
        <Route path="/dashboard/all-category/:currentPage?" exact component={AllCategories}  />
        <Route path="/dashboard/add-category" exact component={AddCategory}  />
        <Route path="/dashboard/category/edit/:categorySlug" exact component={EditCategory}  />
        
        
        <Route path="/dashboard/all-tag/:currentPage?" exact component={AllTag}  />
        <Route path="/dashboard/add-tag" exact component={AddTag}  />
        <Route path="/dashboard/tag/edit/:tagSlug" exact component={EditTag}  />

        <Route path="/dashboard/all-sub-admin/:currentPage?" component={AllSubAdmin} exact />
        <Route path="/dashboard/all-user/:currentPage?" component={AllUser} exact  />
        <Route path="/dashboard/sub-admin-profile/:adminId" component={SubAdminProfile} exact  />
        <Route path="/dashboard/comments/:currentPage?" component={DashBoardComments} exact  />


        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
