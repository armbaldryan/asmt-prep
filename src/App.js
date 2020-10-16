import React from "react";
import Header from "./components/Header";
import { Switch, Route, withRouter } from "react-router-dom";
import Main from "./pages/main";
import Single from "./pages/single";
import Questions from "./pages/questions";

function App(props) {
  return (
    <div className="App">
      <Header {...props} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/questions" component={Questions} />
        <Route exact path="/:skill" component={Single} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
