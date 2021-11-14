import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";
import './Details.css';

const Details = () => {

  const { _id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://lit-mesa-58869.herokuapp.com/products/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td._id === _id);

  // From
  const handleBookingSubmit = (e) => {
    // collect data
    const orders = {
      ...bookingInfo,
      serviceName: ExactIteam[0]?.name,
      serviceId: ExactIteam[0]?._id,
      servicePrice: ExactIteam[0]?.price,
    };
    // send to the server
    fetch("https://lit-mesa-58869.herokuapp.com/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          window.alert("Order SuccessFull ");
        }
      });
      document.getElementById("From").reset();
    e.preventDefault();
  };
  const { user } = useAuth();
  const initialInfo = {
    clientsName: user.displayName,
    email: user.email,
    phone: "",
    address: "",
  };
  const [bookingInfo, setBookingInfo] = useState(initialInfo);
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newInfo = { ...bookingInfo };
    newInfo[field] = value;
    setBookingInfo(newInfo);
  };

  return (
    <div>
      <Navigation></Navigation>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm12">
            <h1 className="mt-5">Full Details</h1>
            <div className="row cart mb-5 mt-5">
              <div className="col-12 dispatch mt-2 mb-5">
                <div className="cart-img">
                  <img
                    className="details-img img-thumbnail p-3"
                    src={ExactIteam[0]?.img}
                    alt=""
                  />
                </div>
                <h2>{ExactIteam[0]?.name}</h2>
                <hr className="detail-hr mt-3 mb-3" />
                <p>
                  <span className="fw-bold">Description : </span>
                  {ExactIteam[0]?.description}
                </p>
                <div className="row">
                  <div className="col-6">
                    <p>
                      <span className="fw-bold">Price :</span>{" "}
                      {ExactIteam[0]?.price}
                    </p>
                    <p>
                      <span className="fw-bold">Model :</span>{" "}
                      {ExactIteam[0]?.model}
                    </p>
                    <p>
                      <span className="fw-bold">Doors :</span>{" "}
                      {ExactIteam[0]?.doors}
                    </p>
                    <p>
                      <span className="fw-bold">Made By :</span>{" "}
                      {ExactIteam[0]?.make}
                    </p>
                    <p>
                      <span className="fw-bold">Transmission :</span>{" "}
                      {ExactIteam[0]?.Transmission}
                    </p>
                    <p>
                      <span className="fw-bold">Cylinder :</span>{" "}
                      {ExactIteam[0]?.cylinder}
                    </p>
                  </div>
                  <div className="col-6">
                    <p>
                      <span className="fw-bold">Fuel Type :</span>{" "}
                      {ExactIteam[0]?.fuelType}
                    </p>
                    <p>
                      <span className="fw-bold">Drive Type :</span>{" "}
                      {ExactIteam[0]?.driveType}
                    </p>
                    <p>
                      <span className="fw-bold">Make :</span>{" "}
                      {ExactIteam[0]?.year}
                    </p>
                    <p>
                      <span className="fw-bold">Engine Power :</span>{" "}
                      {ExactIteam[0]?.engineSize}
                    </p>
                    <p>
                      <span className="fw-bold">Spreed :</span>{" "}
                      {ExactIteam[0]?.mileage}
                    </p>
                    <p>
                      <span className="fw-bold">Condition :</span>{" "}
                      {ExactIteam[0]?.condition}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm12">
            <div className="Order mb-4 ml-3 mt-5 p-4">
              <Box>
                <Typography
                  id="transition-modal-title"
                  variant="h4"
                  component="h2"
                  sx={{ textAlign: "center" }}
                >
                  Order Now
                </Typography>
                <form
                  id="From"
                  sx={{ textAlign: "center" }}
                  onSubmit={handleBookingSubmit}
                >
                  <TextField
                    disabled
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    placeholder={ExactIteam[0]?.name}
                    size="small"
                  />
                  <TextField
                    disabled
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    placeholder={ExactIteam[0]?._id}
                    size="small"
                  />
                  <TextField
                    disabled
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    placeholder={"$" + ExactIteam[0]?.price}
                    size="small"
                  />
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="clientsName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                  />
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                  />
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="phone"
                    onBlur={handleOnBlur}
                    placeholder="phone Number"
                    size="small"
                  />
                  <TextField
                    sx={{ width: "90%", m: 1 }}
                    id="outlined-size-small"
                    name="address"
                    onBlur={handleOnBlur}
                    placeholder="Home Address"
                    size="small"
                  />
                  <button type="submit" className="btn btn-info">
                    Submit
                  </button>
                </form>
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Details;