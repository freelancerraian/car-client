import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const ManageAllOrders = () => {
  const [userOrders, setUserOrders] = useState([]);
  useEffect(() => {
    fetch("https://lit-mesa-58869.herokuapp.com/usersOrders")
      .then((res) => res.json())
      .then((data) => setUserOrders(data));
  }, []);
  const handleDeleteUserService = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?", id);
    if (proceed) {
      const url = `https://lit-mesa-58869.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remainingUsers = userOrders.filter(
              (userService) => userService._id !== id
            );
            setUserOrders(remainingUsers);
          }
        });
    }
  };

  const handleUpdateUser = (id) => {
    const url = `https://lit-mesa-58869.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Shiped Successful");
        }
        console.log(data);
        fetch("https://lit-mesa-58869.herokuapp.com/usersOrders")
          .then((res) => res.json())
          .then((data) => setUserOrders(data));
      });
  };

  return (
    <div className="container">
      <h2>All Orders</h2>
      <TableContainer
        sx={{ maxHeight: 800, overflow: "scroll" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell fontWeight="600">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Order Name</TableCell>
              <TableCell align="center">Order Price</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userOrders.map((userOrder) => (
              <TableRow
                key={userOrder._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {userOrder.clientsName}
                </TableCell>
                <TableCell align="center">{userOrder.email}</TableCell>
                <TableCell align="center">{userOrder.serviceName}</TableCell>
                <TableCell align="center">${userOrder.servicePrice}</TableCell>
                <TableCell align="center">
                  {!userOrder.condition ? (
                    <button
                      onClick={() => handleUpdateUser(userOrder._id)}
                      className="btn btn-danger me-3"
                    >
                      pending
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUpdateUser(userOrder._id)}
                      className="btn btn-success me-3"
                    >
                      shipped
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteUserService(userOrder._id)}
                    className="btn btn-warning"
                  >
                    Cancel
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ManageAllOrders;