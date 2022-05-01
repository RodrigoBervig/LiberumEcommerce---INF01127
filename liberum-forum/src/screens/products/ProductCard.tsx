import React from "react";

export type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  vendorId: string;
  description: string;
};

const ProductCard = (props: {
  product: Product;
  onIncrement: () => void;
  onDecrement: () => void;
  children?: React.ReactElement | React.ReactElement[];
}) => {
  const { product, onIncrement, onDecrement, children } = props;

  return (
    <div className="col-md-3">
      <div className="card m-2">
        <div className="card-body">
          <div className="text-muted">#{product.id}</div>
          <h5 className="pt-2 border-top">{product.name}</h5>
          <div>${product.price}</div>
        </div>
        <div className="card-footer">
          <div className="float-start">
            <button
              className="btn btn-outline-danger"
              onClick={onDecrement}
              style={{ width: 36 }}
            >
              <b>-</b>
            </button>
            <span className="badge bg-dark m-2">{product.quantity}</span>
            <button
              className="btn btn-outline-success"
              onClick={onIncrement}
              style={{ width: 36 }}
            >
              <b>+</b>
            </button>
          </div>
          {!!children && <div className="float-end">{children}</div>}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
