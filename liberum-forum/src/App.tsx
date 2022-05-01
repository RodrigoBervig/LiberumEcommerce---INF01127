import React from "react";
import NavBar from "./NavBar";
import ProductsList from "./ProductList";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <ProductsList />
      {/* <MainContent></MainContent> */}
    </React.Fragment>
  );
};

export default App;
