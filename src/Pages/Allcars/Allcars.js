import React, { useEffect, useState } from "react";
import Product from "../Home/Product/Product";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";

const Allcars = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://lit-mesa-58869.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <h2 className="mt-5">Our Latest Model</h2>
        <div className="service-container row">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Allcars;
