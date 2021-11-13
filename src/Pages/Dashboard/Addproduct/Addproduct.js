import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Addproduct = () => {

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = (data) => {
      axios.post("https://lit-mesa-58869.herokuapp.com/products", data).then((res) => {
        if (res.data.insertedId) {
          alert("Add Successfull");
          reset();
        }
      });
    };

    return (
      <div className="container  p-5">
        <div className="m-5 addservice p-3">
          <h1 className="service-text">Add a New Product</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="add">
            <input
              className="mt-3"
              {...register("name", { required: true, maxLength: 20 })}
              placeholder="Name"
            />
            <input
              className="mt-3"
              {...register("img", { required: true })}
              placeholder="Img Link"
            />
            <input
              className="mt-3"
              {...register("make", { required: true })}
              placeholder="Make"
            />
            <input
              className="mt-3"
              {...register("model", { required: true })}
              placeholder="Model"
            />
            <textarea
              className="mt-3"
              {...register("description", { required: true })}
              placeholder="Description"
            />
            <input
              className="mt-3"
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
            />
            <input
              className="mt-3"
              {...register("color", { required: true })}
              placeholder="Color"
            />
            <input
              className="mt-3"
              {...register("year", { required: true })}
              placeholder="Year"
            />
            <input
              className="mt-3"
              {...register("driveType", { required: true })}
              placeholder="Drive Type"
            />
            <input
              className="mt-3"
              {...register("Transmission", { required: true })}
              placeholder="Transmission"
            />
            <input
              className="mt-3"
              {...register("condition", { required: true })}
              placeholder="Condition"
            />
            <input
              className="mt-3"
              {...register("mileage", { required: true })}
              placeholder="Mileage"
            />
            <input
              className="mt-3"
              {...register("fuelType", { required: true })}
              placeholder="FuelType"
            />
            <input
              className="mt-3"
              {...register("engineSize", { required: true })}
              placeholder="EngineSize"
            />
            <input
              className="mt-3"
              {...register("doors", { required: true })}
              placeholder="Doors"
            />
            <input
              className="mt-3"
              {...register("cylinder", { required: true })}
              placeholder="Cylinder"
            />
            <input
              className="mt-3"
              {...register("vin", { required: true })}
              placeholder="Vin"
            />
            <button type="submit" className="addbtn">
              <nav className="btn-nav">
                <ul className="btn-ul">
                  <li className="btn-li">
                    Submit
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </nav>
            </button>
          </form>
        </div>
      </div>
    );
};

export default Addproduct;