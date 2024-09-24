import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { handleLoggedout, handleredirectContact } from "../../Redux/AuthSlice";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { profile_details } from '../../Redux/AuthSlice';
import { useTheme } from '@mui/material/styles';


import "./Header.css"
import { blue } from "@mui/material/colors";

export default function Header() {
  const [is_loggedIn, setis_loggedIn] = useState("");
  const Name = localStorage.getItem("name");
  const { isLoggedIn, userpic, profile } = useSelector((state) => state?.contents);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    setis_loggedIn(Name);
  }, [Name]);

  useEffect(() => {
    dispatch(profile_details());
  }, [dispatch]);



  const logout = () => {
    dispatch(handleLoggedout());
    navigate("/login");
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Menu", route: "/menu" },
    { name: "Blog", route: "/blog" },
    { name: "Contact", route: "/contact" },

  ];

  const settings = [
    <Button color="inherit" component={NavLink} to="/profile" key="profile">
      Profile details
    </Button>,
    <Button color="inherit" component={NavLink} to="/showProducts" key="showProducts">
      see your order
    </Button>,
    <Button color="inherit" component={NavLink} to="/registration" key="registration">
      Registration
    </Button>,
    isLoggedIn ? (
      <Button color="inherit" onClick={() => { logout(); dispatch(handleredirectContact()); }} key="logout">
        Logout
      </Button>
    ) : (
      <Button color="inherit" component={NavLink} to="/login" key="login">
        Login
      </Button>
    )
  ];

  return (
    <AppBar position="static" className="AppBar" sx={{ backgroundColor: 'rgb(255, 94, 0)' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Hello
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"

            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              className="drawer"
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                className='box'
              >
                <IconButton onClick={toggleDrawer(false)}>
                  {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
                <Divider />
                <List>
                  {navItems.map((item) => (
                    <ListItem button key={item.name}>
                      <NavLink to={item.route} className="NavLink">
                        <ListItemText primary={item.name} />
                      </NavLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Navbar

          </Typography>
          <Typography>
            <p>{isLoggedIn ? (is_loggedIn) : null}</p>


          </Typography>

          <Box className="nav_box" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {navItems.map((item) => (
              <NavLink key={item.name} to={item.route} className="NavLink" style={{ textAlign: "center", textDecoration: 'none', color: 'white' }}>
                <Button sx={{ my: 2, color: 'white', display: 'block' }}>
                  {item.name}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {isLoggedIn ? <Avatar alt="user" src={`https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic/${userpic}`} /> : <Button  className="login-button" style={{backgroundColor:"#2C73D2",color:"white"}} color="inherit" component={NavLink} to="/login" key="login">
                  Login
                </Button>}

              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
