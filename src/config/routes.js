import React from "react";
import { Switch, Route } from "react-router-dom";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
export default () => (
  <Switch>
    <Route path="/register" component={Register} />
    <Route path="/login" component={Login} />
  </Switch>
);
