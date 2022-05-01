import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import NavBar from "./NavBar";
import ProductsPage from "./ProductList";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container py-3 px-5">
          <Switch>
            <Route exact={true} path="/" component={ProductsPage} />
            <Route path="/produtos" component={ProductsPage} />
            <Route path="/cadastro-produto" component={FoobarPage} />

            <Redirect from="/" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const FoobarPage = () => {
  return <></>;
};

export default App;
