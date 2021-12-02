import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Blog from "./Containers/Blog"
import Blog1 from "./Containers/Blog1";
import Blog2 from "./Containers/Blog2";
import Blog3 from "./Containers/Blog3";
import Blog4 from "./Containers/Blog4";

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
      </Switch>
    </HashRouter>
  );
};

export default Router;
