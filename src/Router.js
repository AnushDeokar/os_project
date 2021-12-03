import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Blog from "./Containers/Blog"
import Blog1 from "./Containers/Blog1";
import Blog2 from "./Containers/Blog2";
import Blog3 from "./Containers/Blog3";
import Blog4 from "./Containers/Blog4";
import Blog5 from "./Containers/Blog5";
import Blog6 from "./Containers/Blog6";
import Blog7 from "./Containers/Blog7";
import Blog8 from "./Containers/Blog8";
import Blog9 from "./Containers/Blog9";


// import BlogPost from "./Containers/BlogPost";

var createBrowserHistory = require("history").createBrowserHistory;
const history = createBrowserHistory();

const Router = () => {
  return (
    <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={Blog} />
        {/* <Route exact path="/blog/:title/:issueNumber" component={BlogPost}/> */}
        <Route exact path="/blog1" component={Blog1}/>
        <Route exact path="/blog2" component={Blog2}/>
        <Route exact path="/blog3" component={Blog3}/>
        <Route exact path="/blog4" component={Blog4}/>
        <Route exact path="/blog5" component={Blog5}/>
        <Route exact path="/blog6" component={Blog6}/>
        <Route exact path="/blog7" component={Blog7}/>
        <Route exact path="/blog8" component={Blog8}/>
        <Route exact path="/blog9" component={Blog9}/>
      </Switch>
    </HashRouter>
  );
};

export default Router;
