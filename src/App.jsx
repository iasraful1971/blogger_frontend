import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminLogin from "./components/auth/AdminLogin";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/dashborad/Dashboard";
import Home from "./components/home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/admin/login" component={AdminLogin} exact />
          <Route path="/article/:currentPage?" component={Home} exact />
          <Route path="/article/details/:slug" component={Home} exact />
          <Route
            path="/article/category/:categorySlug/:currentPage?"
            component={Home}
            exact
          />
          <Route
            path="/article/tag/:tagSlug/:currentPage?"
            component={Home}
            exact
          />

          <Route path="/article/search/:searchValue" component={Home} exact />
          {/* dash */}
          <Route path="/dashboard" component={Dashboard}  />
          
          <Route path="/dashboard/all-articles/:currentPage?" component={Dashboard} exact  />
          <Route path="/dashboard/article-add" component={Dashboard}  />
          <Route path="/dashboard/article/edit/:articleSlug" component={Dashboard} exact  />
          
          <Route path="/dashboard/all-category/:currentPage?" component={Dashboard} exact  />
          <Route path="/dashboard/add-category" component={Dashboard} exact  />
          <Route path="/dashboard/category/edit/:categorySlug" component={Dashboard} exact />
          
          <Route path="/dashboard/all-tag/:currentPage?" component={Dashboard} exact  />
          <Route path="/dashboard/add-tag" component={Dashboard} exact  />
          <Route path="/dashboard/tag/edit/:tagSlug" component={Dashboard} exact  />

          <Route path="/dashboard/all-sub-admin/:currentPage?" component={Dashboard} exact/>
         
          <Route path="/dashboard/all-user" component={Dashboard} exact  />
          <Route path="/dashboard/sub-admin-profile/:adminId" component={Dashboard} exact  />
          <Route path="/dashboard/comments/:currentPage?" component={Dashboard} exact  />
        
         

        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
