
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Logo from './../Assets/Logo.jpg'; // Import your logo image

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const navigate = useNavigate();

  // Handle menu open and close
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Handle navigation on desktop
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(90deg, #FFD700, #FF8C00)',
        height: '80px',
        boxShadow: 3,
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={Logo}
            alt="Logo"
            style={{
              width: 50,
              height: 50,
              borderRadius: '50%',
              marginRight: 10,
            }}
          />
          <Typography
            variant="h6"
            sx={{
              color: '#FFF',
              fontWeight: 'bold',
              fontFamily: 'cursive',
              fontSize: '1.5rem',
              letterSpacing: '1px',
              letterSpacing: '2px',
            }}
          >
            Amazing Dubai
          </Typography>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          {[
            { text: 'Home', id: 'hero-section' },
            { text: 'About Us', id: 'about-us-section' },
            { text: 'Services', id: 'services' },
            { text: 'Events', id: 'prelaunchtimestamp' },
          ].map((item) => (
            <Button
              key={item.text}
              color="inherit"
              onClick={() => scrollToSection(item.id)}
              sx={{
                fontWeight: 'bold',
                textTransform: 'capitalize',
                color: '#fff',
                '&:hover': { color: '#FFFFFF' },
              }}
            >
              {item.text}
            </Button>
          ))}
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          color="warning"
          onClick={() => navigate('/login')}
          sx={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            borderRadius: '20px',
            px: 3,
            py: 1,
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            display: { xs: 'none', md: 'inline-flex' },
          }}
        >
          Login
        </Button>

        {/* Hamburger Menu for Mobile */}
        <IconButton
          color="inherit"
          edge="end"
          onClick={handleMenuOpen}
          sx={{ display: { xs: 'block', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Mobile Menu */}
        <Menu
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => { handleMenuClose(); scrollToSection('hero-section'); }}>
            Home
          </MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); scrollToSection('about-us-section'); }}>
            About Us
          </MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); scrollToSection('services'); }}>
            Services
          </MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); scrollToSection('prelaunchtimestamp'); }}>
            Events
          </MenuItem>
          <MenuItem onClick={() => { handleMenuClose(); navigate('/login'); }}>
            Login
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
