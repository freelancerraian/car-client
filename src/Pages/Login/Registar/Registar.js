import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import './Registar.css';
import login from "../../../images/login.png";
import useAuth from '../../../hooks/useAuth';
import './Registar.css';

const Registar = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registarUser, isLoading, authError } = useAuth();

    const handleOnBlur = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    const handleLoginSubmit = (e) => {
      if (loginData.password !== loginData.password2) {
        alert("Your password did not match");
        return;
      }
      registarUser(
        loginData.email,
        loginData.password,
        loginData.name,
        history
      );
      e.preventDefault();
    };

    return (
      <Container>
        <Grid container spacing={2}>
          <Grid
            sx={{ mt: 8 }}
            item
            xs={12}
            md={6}
            style={{ textAlign: "center" }}
          >
            <Typography variant="body1" gutterBottom>
              Registar
            </Typography>
            {!isLoading && (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Name"
                  name="name"
                  type="text"
                  onBlur={handleOnBlur}
                  variant="standard"
                  required
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                  required
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                  required
                />
                <TextField
                  sx={{ width: "75%", m: 1 }}
                  id="standard-basic"
                  label="ReType Your Password"
                  type="password"
                  name="password2"
                  onBlur={handleOnBlur}
                  variant="standard"
                  required
                />
                <Button
                  sx={{ width: "75%", m: 1 }}
                  type="submit"
                  variant="contained"
                >
                  Registar
                </Button>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registared? Please Login
                  </Button>
                </NavLink>
              </form>
            )}
            {isLoading && <CircularProgress />}
            {user?.email && (
              <Alert severity="success">User Created successfully!</Alert>
            )}
            {authError && <Alert severity="error">{authError}</Alert>}
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 8 }}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Registar;