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
              {description}
            </Typography>
          </CardContent>
          <div className="d-flex justify-content-center">
            <Link to={`/details/${_id}`}>
              <Button variant="outlined" size="medium">
                Buy Now
              </Button>
            </Link>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Product;