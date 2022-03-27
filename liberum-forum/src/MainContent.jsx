import { Component } from "react";

class MainContent extends Component {
  state = {
    pageTitle: "Produtos",
    products: [
      { id: 2, name: "produto1", vendorId: "123", description: "teste" },
      { id: 3, name: "produto2", vendorId: "932", description: "teste" },
      { id: 4, name: "produto3", vendorId: "672", description: "teste" },
    ],
    productCount: 3,
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.productCount}
          </span>
          <button onClick={this.onRefreshClick}>Refresh</button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>vendorId</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>{this.getProductRow()}</tbody>
        </table>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      productCount: this.productCount + 1,
    });
  };

  getProductRow = () => {
    return this.state.products.map((product) => {
      return (
        <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.vendorId}</td>
          <td>{product.description}</td>
        </tr>
      );
    });
  };
}

export default MainContent;
