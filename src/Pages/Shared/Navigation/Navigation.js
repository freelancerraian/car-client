import React from 'react';
import './Navigation.css';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.jpeg';
import userimg from '../../../images/user.jpg';

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
      <div>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
              <img className="custom-logo" src={logo} alt="" />
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link fw-bold" to="/">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item cus-style">
                    <NavLink className="nav-link fw-bold" to="/products">
                      Cars
                    </NavLink>
                  </li>
                </ul>
                <div className="user-info border rounded-pill d-flex p-2">
                    <span>
                      <h5>{user.displayName}</h5>
                    </span>
                    {user.photoURL ? (
                      <span>
                        <img
                          className="user-img img-thumbnail"
                          src={user.photoURL}
                          alt=""
                        />
                      </span>
                    ) : (
                      <span>
                        <img
                          className="user-img img-thumbnail"
                          src={userimg}
                          alt=""
                        />
                      </span>
                    )}
                  </div>
                <div>
                  {user?.email ? (
                    <Box>
                      <NavLink
                        style={{ textDecoration: "none", color: "white" }}
                        to="/dashboard"
                      >
                        <Button
                          variant="outlined"
                          size="medium"
                          style={{marginRight:"3px"}}
                        >
                          Dashboard
                        </Button>
                      </NavLink>
                      <Button onClick={logout} variant="outlined" size="medium">
                        Logout
                      </Button>
                    </Box>
                  ) : (
                    <NavLink
                      style={{ textDecoration: "none", color: "white" }}
                      to="/login"
                    >
                      <Button variant="outlined" size="medium">
                        Login
                      </Button>
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
};

export default Navigation;