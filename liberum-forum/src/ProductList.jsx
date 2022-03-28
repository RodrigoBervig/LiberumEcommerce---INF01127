import { Component } from "react";
import Product from "./Product";
class ProductList extends Component {
  state = {
    pageTitle: "Produtos",
    products: [
      {
        id: 2,
        name: "produto1",
        vendorId: "123",
        price: 0,
        quantity: 0,
        description: "teste",
      },
      {
        id: 3,
        name: "produto2",
        vendorId: "932",
        price: 0,
        quantity: 0,
        description: "teste",
      },
      {
        id: 4,
        name: "produto3",
        vendorId: "672",
        price: 0,
        quantity: 0,
        description: "teste",
      },
    ],
    filterText: "",
  };

  componentDidMount = async () => {
    var response = await fetch("http://localhost:8080/products", {
      method: "GET",
    });

    var prods = await response.json();

    prods = prods.map((p) => {
      let paux = p;
      paux.quantity = 0;
      return paux;
    });

    this.setState({ products: prods });
  };

  render() {
    return (
      <div className="container-fluid">
        <h4 className="float-left border-bottom m-1 p-1">ProductList</h4>

        <div class="input-group mb-3 m-1">
          <input
            type="text"
            class="form-control"
            placeholder="Filtrar produtos"
            aria-label="Filtrar produtos"
            aria-describedby="basic-addon2"
            onChange={this.onChangeFilterBox}
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              onClick={this.handleFilterClick}
            >
              Filtrar
            </button>
          </div>
        </div>

        <div className="row">
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onIncrement={this.handleIncrement}
              onDecrement={this.handleDecrement}
            >
              <button className="btn btn-primary">Comprar</button>
            </Product>
          ))}
        </div>
      </div>
    );
  }

  handleIncrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity++;
    this.setState({ products: allProducts });
  };

  handleDecrement = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    allProducts[index].quantity =
      allProducts[index].quantity - 1 >= 0
        ? allProducts[index].quantity - 1
        : 0;
    this.setState({ products: allProducts });
  };

  onChangeFilterBox = (e) => {
    this.setState({ filterText: e.target.value });
    console.log(this.state.filterText);
  };

  handleFilterClick = () => {

    let url = `http://localhost:8080/products/search/${this.state.filterText}`

    var response = await fetch(url, {
      method: "GET",
    });

    var prods = await response.json();

    prods = prods.map((p) => {
      let paux = p;
      paux.quantity = 0;
      return paux;
    });


    this.setState({ products: prods });
  };
}

export default ProductList;
