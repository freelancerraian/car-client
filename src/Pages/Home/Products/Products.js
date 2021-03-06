import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-mesa-58869.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const home = products.slice(0,6);

  return (
    <div>
      <div className="container mb-5">
        <h2 className="mt-5">Our Latest Model</h2>
        <div className="service-container row">
          {home.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
        <NavLink className="nav-link fw-bold" to="/products">
          <button type="button" class="btn btn-info mb-3">
            See More
          </button>
        </NavLink>
      <hr/>
      </div>
    </div>
  );
};

export default Products;