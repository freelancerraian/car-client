import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import './Dashboard.css';
import { Button } from "@mui/material";
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import Addproduct from "../Addproduct/Addproduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import ManageAllOrders from "../ManageAllorders/ManageAllOrders";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import Payment from "../Payment/Payment";
import SvgIcon from "@mui/material/SvgIcon";

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const drawerWidth = 300;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { admin, logout } = useAuth();

  let {path, url} = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography>
          <Link style={{ textDecoration: "none" }} to="/">
            <Button variant="outlined" size="medium">
              <HomeIcon color="secondary" />
              Home
            </Button>
          </Link>
        </Typography>
      </Box>
      {!admin && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            <Link style={{ textDecoration: "none" }} to={`${url}/myorders`}>
              <Button variant="outlined" size="medium">
                My Orders
              </Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/review`}>
              <Button variant="outlined" size="medium">
                Review
              </Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/pay`}>
              <Button variant="outlined" size="medium">
                Payment
              </Button>
            </Link>
          </Typography>
        </Box>
      )}
      {admin && (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography>
            <Link style={{ textDecoration: "none" }} to={`${url}/makeAdmin`}>
              <Button variant="outlined" size="medium">
                Make Admin
              </Button>
            </Link>
            <br />
            <Link style={{ textDecoration: "none" }} to={`${url}/addproduct`}>
              <Button variant="outlined" size="medium">
                Add Product
              </Button>
            </Link>
            <br />
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageproducts`}
            >
              <Button variant="outlined" size="medium">
                Manage Products
              </Button>
            </Link>
            <br />
            <Link
              style={{ textDecoration: "none" }}
              to={`${url}/manageallorders`}
            >
              <Button variant="outlined" size="medium">
                <i class="fas fa-shopping-cart "></i>
                Manage AllOrders
              </Button>
            </Link>
            <br />
          </Typography>
        </Box>
      )}
      <Typography
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button onClick={logout} variant="outlined" size="medium">
          Logout
        </Button>
      </Typography>
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            <DashboardHome></DashboardHome>
          </Route>
          <Route exact path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Payment></Payment>
          </Route>
          <AdminRoute path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/addproduct`}>
            <Addproduct></Addproduct>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllOrders></ManageAllOrders>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;