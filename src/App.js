import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AddUser } from "./features/grid/AddUser.jsx";
import { EditUser } from "./features/grid/EditUser";
import React from "react";
import { UserList } from "./features/grid/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user">
            <AddUser />
          </Route>
          <Route path="/edit-user">
            <EditUser />
          </Route>
          <Route path="/">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}