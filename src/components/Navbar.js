import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Button, Box, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import logo_white from '../media/logo_white.png';

const navButtonStyles = {
  fontFamily: "'Kanit', sans-serif",
  fontWeight: 700,
  fontStyle: 'normal',
  fontSize: '16px',
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
};

const activeButtonStyles = {
  backgroundColor: 'white',
  color: 'black',
};

const menuItemStyles = {
  '&:hover': {
    backgroundColor: 'white',
    color: 'black',
  },
  backgroundColor: 'black',
  color: 'white',
  fontFamily: "'Kanit', sans-serif",
  fontWeight: 700,
  padding: '10px 20px',
};

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation(); // To get the current path

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Create a reusable navigation link component with active state detection
  const NavLink = ({ to, label }) => (
    <Button
      component={Link}
      to={to}
      color="inherit"
      sx={{
        ...navButtonStyles,
        ...(location.pathname === to && activeButtonStyles), // Apply active styles if current page
      }}
    >
      {label}
    </Button>
  );

  return (
    <AppBar position="fixed" sx={{ backgroundColor: 'black', color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* The logo will act as the menu opening button on hover for mobile */}
        <IconButton
          color="inherit"
          aria-controls={open ? 'menu-navbar' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={isMobile ? handleMenuOpen : null} // Make it clickable only on mobile
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 2, p: 0, cursor: isMobile ? 'pointer' : 'default' }}
        >
          <Box component="img" src={logo_white} alt="Logo" sx={{ height: 40, width: 'auto' }} />
        </IconButton>

        {/* Show the dropdown menu on hover for mobile */}
        {isMobile && (
          <Menu
            id="menu-navbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            MenuListProps={{
              onMouseLeave: handleMenuClose,
              onMouseEnter: handleMenuOpen,
            }}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: 'black',
                padding: 0,
                margin: 0,
              },
            }}
          >
            {[
              { label: 'Home', path: '/' },
              { label: 'Songs & Sets', path: '/Audio' },
               /*     label: 'Dates', path: '/Dates'  />*/,
              { label: 'Contact', path: '/Contact' },
              { label: 'About', path: '/About' },
            ].map((item) => (
              <MenuItem
                key={item.label}
                component={Link}
                to={item.path}
                onClick={handleMenuClose}
                sx={menuItemStyles}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        )}

        {/* Full navigation for larger screens */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'space-around' }}>
          {[
            { label: 'Home', path: '/' },
            { label: 'Songs & Sets', path: '/Audio' },
            /*     label: 'Dates', path: '/Dates'  />*/,
            { label: 'Contact', path: '/Contact' },
            { label: 'About', path: '/About' },
          ].map((item) => (
            <NavLink key={item.label} to={item.path} label={item.label} />
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;