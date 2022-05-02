import React, { useEffect, useState } from "react";
import apiAxios from "../../apiClient";

type Product = {
  id: number;
  name: string;
  price: number;
  vendorId: string;
  description: string;
};

const ProductDetails = (props: { productId: string }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    apiAxios
      .get(`products/id/${props.productId}`)
      .then((resp) => setProduct({ ...resp.data }));
  }, []);

  return (
    <div className="col-sm-12">
      <div className="card m-2">
        <div className="card-body">
          {!product ? (
            <div className="alert alert-primary">Carregando...</div>
          ) : (
            <>
              <div className="text-muted">#{product.id}</div>
              <h5 className="pt-2 border-top">{product.name}</h5>
              <div>R$ {product.price}</div>
              <div>{product.description}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
