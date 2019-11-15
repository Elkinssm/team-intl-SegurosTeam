import React from "react";
import { Router, Route } from "react-router";
import { createBrowserHistory } from "history";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Users from "./components/Users";
import Seguro from "./components/Seguro";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Start from "./components/Start";
import Admin from "./components/Admin";
import "./App.scss";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Start}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/users" component={Users}></Route>
      <Route path="/seguro" component={Seguro}></Route>
      <Route path="/contact" component={Contact}></Route>
      <Route path="/sign-up" component={SignUp}></Route>
      <Route path="/admin" component={Admin}></Route>
    </Router>
  );
}

export default App;
