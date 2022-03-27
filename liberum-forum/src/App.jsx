import React, { Component } from "react";
import NavBar from "./NavBar";
import MainContent from "./MainContent";
import ProductList from "./ProductList";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar></NavBar>
        <ProductList></ProductList>
        {/* <MainContent></MainContent> */}
      </React.Fragment>
    );
  }
}

export default App;
