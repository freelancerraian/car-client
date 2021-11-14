import * as React from "react";
import "./DashboardHome.css";
import Grid from "@mui/material/Grid";
import wellcome from '../../../images/wellcome.jpg';

const DashboardHome = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
          <img src={wellcome} alt="" />
      </Grid>
    </Grid>
  );
};

export default DashboardHome;
