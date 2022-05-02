import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import NavBar from "./NavBar";
import ProductDetails from "./screens/products/ProductDetails";
import ProductsPage from "./screens/products/ProductList";
import RegisterProduct from "./screens/products/RegisterProduct";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <div className="container py-3 px-5">
          <Switch>
            <Route exact={true} path="/" component={ProductsPage} />
            <Route path="/produtos/:productId" component={ProductsPage}>
              {({ match }) => (
                <ProductDetails productId={match!.params.productId} />
              )}
            </Route>
            <Route path="/produtos" component={ProductsPage} />
            <Route path="/cadastro-produto" component={RegisterProduct} />

            <Redirect from="/" to="/" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
