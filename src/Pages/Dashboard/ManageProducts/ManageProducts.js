import React, { useEffect, useState } from 'react';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("https://lit-mesa-58869.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);

    // DELETE Products
    const handleDeleteProducts = (id) => {
      const proceed = window.confirm("Are You Sure ?");
      if (proceed) {
        const url = `https://lit-mesa-58869.herokuapp.com/products/${id}`;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              alert("Delete Success");
              const remainingProducts = products.filter(
                (products) => products._id !== id
              );
              setProducts(remainingProducts);
            }
          });
      }
    };

    return (
      <div className="container">
        <h1>Manage Products</h1>
        <div className="mg d-flex mt-5">
          <div className="row">
            {products.map((products) => (
              <div key={products._id} className="col-lg-4 col-md-4 col-sm-12">
                <img style={{ width: "80%" }} src={products.img} alt="" />
                <h5>{products.name}</h5>
                <p>
                  <span className="fw-bold">Id :</span> {products._id}
                </p>
                <p>
                  <span className="fw-bold">Make :</span> {products.year}
                </p>
                <p>
                  <span className="fw-bold">Made By :</span> {products.make}
                </p>
                <p>
                  <span className="fw-bold">Model :</span> {products.model}
                </p>
                <button
                  className="btn btn-warning mb-5"
                  onClick={() => handleDeleteProducts(products._id)}
                >
                  Delate
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ManageProducts;