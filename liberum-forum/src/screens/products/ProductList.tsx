import React, { useState, useEffect } from "react";

import apiAxios from "../apiClient";
import ProductCard, { Product } from "./ProductCard";

type ProductsListState = {
  filter: string;
  products: Product[];
};

const ProductsPage = () => {
  const [state, setState] = useState<ProductsListState>({
    filter: "",
    products: PRODUCTS_PLACEHOLDER,
  });

  console.log(state);

  useEffect(function loadProducts() {
    apiAxios.get(`products`).then((resp) => {
      console.log(resp);
      setState({
        filter: "",
        products: resp.data.length > 0 ? normalizeProducts(resp.data) : [],
      });
    });
  }, []);

  return (
    <>
      <h3 className="float-left p-1">Lista de Produtos</h3>
      <div className="input-group my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrar produtos"
          aria-label="Filtrar produtos"
          onChange={(ev) => setState({ ...state, filter: ev.target.value })}
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={function handleFilterClick() {
              apiAxios.get(`products/search/${state.filter}`).then((resp) => {
                setState({
                  ...state,
                  products: normalizeProducts(resp.data),
                });
              });
            }}
          >
            Filtrar
          </button>
        </div>
      </div>

      <div className="row">
        {state.products.length === 0 ? (
          <div className="alert alert-primary">Nenhum produto cadastrado.</div>
        ) : (
          state.products.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onIncrement={function handleIncrementProduct() {
                let productsUpdated = [...state.products];
                let currProductIndex = productsUpdated.indexOf(prod);
                productsUpdated[currProductIndex].quantity++;
                setState({ ...state, products: productsUpdated });
              }}
              onDecrement={function handleDecrementProduct() {
                let productsUpdated = [...state.products];
                let currProductIndex = productsUpdated.indexOf(prod);
                productsUpdated[currProductIndex].quantity =
                  productsUpdated[currProductIndex].quantity > 0
                    ? productsUpdated[currProductIndex].quantity - 1
                    : 0;
                setState({ ...state, products: productsUpdated });
              }}
            >
              <button className="btn btn-primary" onClick={() => {}}>
                Comprar
              </button>
            </ProductCard>
          ))
        )}
      </div>
    </>
  );
};

function normalizeProducts(data: any[]): Product[] {
  return data.map((p) => {
    return {
      id: p.id,
      name: p.name,
      description: p.description,
      price: p.price,
      vendorId: p.vendorId,
      quantity: 0,
    };
  });
}

const PRODUCTS_PLACEHOLDER: Product[] = [
  {
    id: 1,
    name: "Produto Um",
    vendorId: "123",
    price: 1,
    quantity: 0,
    description: "Descrição do produto 1",
  },
  {
    id: 2,
    name: "Produto Dois",
    vendorId: "932",
    price: 2,
    quantity: 0,
    description: "Descrição do produto 2",
  },
  {
    id: 3,
    name: "Produto Três",
    vendorId: "672",
    price: 3,
    quantity: 0,
    description: "Descrição do produto 3",
  },
];

export default ProductsPage;
