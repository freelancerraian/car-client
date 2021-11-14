import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";

const Product = ({product}) => {
  
  const {
    _id,
    name,
    img,
    price,
    make,
    model,
    color,
    driveType,
    year,
    Transmission,
    condition,
    mileage,
    fuelType,
    engineSize,
    doors,
    cylinder,
    vin,
    description,
  } = product;
  
  return (
    <div className="p-4 pb-3 col-lg-4 col-md-4 col-sm-12">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.slice(0, 200)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="fw-bold">Price :</span> {price} $
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="fw-bold">Color : </span> {color}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="fw-bold">Doors : </span> {doors}
            </Typography>
          </CardContent>
          <div className="d-flex justify-content-center">
            <Link style={{ textDecoration: "none" }} to={`/details/${_id}`}>
              <button type="button" class="btn btn-success mb-3">
                Buy Now
              </button>
            </Link>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Product;