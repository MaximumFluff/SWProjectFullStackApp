import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import IdeaNew from "./components/IdeaNew";
import IdeaIndex from "./components/idea_index";
import CommentIndex from "./components/comment_index";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <div className="background"> </div>
            <div className="content-wrapper">
              <Link to="/">Home</Link> <Link to="/ideas/new">New Idea</Link>{" "}
              <Link to="/comment">Comments</Link>{" "}
              <Switch>
                <Route exact path="/" component={IdeaIndex} />
                <Route path="/ideas/new" component={IdeaNew} />
                <Route path="/comment" component={CommentIndex} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
