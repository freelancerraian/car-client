import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useAuth from "../../../hooks/useAuth";
import Navigation from "../../Shared/Navigation/Navigation";

const Details = () => {
    const { register, handleSubmit, reset } = useForm();
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
                <h1>{ExactIteam[0]?.name}</h1>
                <h4>Description</h4>
                <hr className="detail-hr mt-3 mb-3" />
                <h5>{ExactIteam[0]?.description}</h5>
                <h6>Price : {ExactIteam[0]?.price}</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm12">
            <div className="Order mb-4 ml-3 mt-5">
              <Box sx={{}}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                  sx={{ textAlign: "center" }}
                >
                  Order
                </Typography>
                <form
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

                  <button type="submit" className="btn-Car">
                    Submit
                  </button>
                </form>
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
