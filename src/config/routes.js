import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import NewWork from "../components/NewWork/NewWork";
export default () => (
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/newwork" component={NewWork} />
  </Switch>
);
