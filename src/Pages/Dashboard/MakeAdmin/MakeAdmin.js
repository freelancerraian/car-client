import { TextField, Button, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = (e) => {
      setEmail(e.target.value);
    };
    const handleAdminSubmit = (e) => {
      const user = { email };
      fetch('https://lit-mesa-58869.herokuapp.com/users/admin', {
        method: "PUT",
        headers: {
          authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            console.log(data);
            setSuccess(true);
          }
        });

      e.preventDefault();
    };

    return (
      <div className="container d-flex justify-content-center">
        <div className="main Order m-5 p-3">
          <h1>Make An Admin</h1>
          <div className="">
            <form onSubmit={handleAdminSubmit}>
              <TextField
                onBlur={handleOnBlur}
                type="email"
                label="Email"
                variant="standard"
                style={{ width: "100%" }}
              />
              <Button
              className="mt-4"
                type="submit"
                variant="contained"
                style={{ width: "100%" }}
              >
                Make Admin
              </Button>
            </form>
          </div>
        </div>
        {success && <Alert severity="success">Made Admin successfully!</Alert>}
      </div>
    );
};

export default MakeAdmin;