import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StudentRouter } from "./Students/Router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <StudentRouter />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
