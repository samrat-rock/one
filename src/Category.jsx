import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "./Data";

function Category() {
  const { categoryName } = useParams();

  const filteredProducts = Products.filter(
    (product) => product.category === categoryName
  );

  return (
    <section>
      <div className="container">
        <h2>{categoryName} Products</h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-lg-3" key={product.id}>
              <div className="shadow p-2 border">
                <img className="w-100" src={product.image} alt={product.title} />
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
