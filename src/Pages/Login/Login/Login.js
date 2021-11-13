import { Alert, Button, CircularProgress, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Login.css';
import login from '../../../images/login.png'
import TextField from "@mui/material/TextField";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading,signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };

    const handleLoginSubmit = (e) => {
      loginUser(loginData.email, loginData.password, location, history);
      e.preventDefault();
    };

    const handleGoogleSignIn =()=>{
      signInWithGoogle(location, history);
    }

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
              Login
            </Typography>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                onBlur={handleOnChange}
                variant="standard"
                required
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Password"
                type="password"
                name="password"
                onBlur={handleOnChange}
                variant="standard"
                required
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Login
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/registar">
                <Button variant="text">New User? Please Registar</Button>
              </NavLink>
              {isLoading && <CircularProgress />}
              {user?.email && (
                <Alert severity="success">Login successfully!</Alert>
              )}
              {authError && <Alert severity="error">{authError}</Alert>}
            </form>
            <p>-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-</p>
            <Button
              onClick={handleGoogleSignIn}
              sx={{ my: 2 }}
              style={{ width: "75%" }}
              variant="contained"
            >
              Login With Google
            </Button>
          </Grid>
          <Grid item xs={12} md={6} sx={{ mt: 8 }}>
            <img style={{ width: "100%" }} src={login} alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Login;