import React, { useState } from "react";
import apiAxios from "../../apiClient";

export type UnregisteredProduct = {
  name?: string;
  price?: number;
  vendorId: number;
  description?: string;
};

const RegisterProduct = () => {
  const [savingState, setSavingState] = useState<
    "loading" | "success" | "error" | null
  >(null);

  const [product, setProduct] = useState<UnregisteredProduct>({
    vendorId: 123,
  });

  const isProductValid =
    !!product.description &&
    product.description !== "" &&
    !!product.name &&
    product.name !== "" &&
    !!product.price &&
    product.price > 0;

  console.log(isProductValid, product);

  return (
    <>
      <h3>Cadastrar Produto</h3>
      <div className="card m-2">
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                className="form-control"
                id="nome"
                placeholder="Nome do Produto"
                value={product.name ?? ""}
                onChange={(ev) =>
                  setProduct({ ...product, name: ev.target.value })
                }
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="price">Preço</label>
              <input
                type="number"
                className="form-control"
                id="price"
                placeholder="Preço do Produto"
                value={product.price ?? 0}
                onChange={(ev) =>
                  setProduct({
                    ...product,
                    price: parseInt(ev.target.value, 10),
                  })
                }
              />
            </div>
            <br />

            <div className="form-group">
              <label htmlFor="description">Descrição</label>
              <input
                type="text"
                className="form-control"
                id="description"
                placeholder="Descrição do Produto"
                value={product.description ?? ""}
                onChange={(ev) =>
                  setProduct({ ...product, description: ev.target.value })
                }
              />
            </div>
            <br />
            {savingState === "success" ? (
              <div className="alert alert-success">
                Produto cadastrado com sucesso!
              </div>
            ) : savingState === "error" ? (
              <div className="alert alert-danger">
                Ocorreu um erro ao cadastrar o produto.
              </div>
            ) : (
              <button
                type="submit"
                className="btn btn-primary"
                disabled={savingState === "loading" || !isProductValid}
                onClick={() => {
                  setSavingState("loading");
                  apiAxios
                    .post("products", { ...product })
                    .then(() => setSavingState("success"))
                    .catch(() => setSavingState("error"));
                }}
              >
                Cadastrar
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterProduct;
