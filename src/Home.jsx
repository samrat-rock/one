import React from "react";
import { Link } from "react-router-dom";
import { Category, Products } from "./Data";

function Home() {
  let electronics = Products.filter((product) => product.category === "electronics");

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ul className="list-group">
                {Category.map((category, index) => (
                  <li key={index} className="list-group-item">
                    <Link to={`/category/${category}`} className="text-decoration-none">
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <img
                className="w-100"
                src="https://thulo.com.np/assets/landlord/uploads/media-uploader/sell-online-at-thulo1730868009.webp"
                alt="Banner"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="font-bold">All Products</h2>
          <div className="row">
            {electronics.map((product) => (
              <div className="col-lg-3" key={product.id}>
                <div className="shadow p-2 border">
                  <img className="w-100" src={product.image} alt={product.title} />
                  <p className="fw-bold py-2">{product.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
