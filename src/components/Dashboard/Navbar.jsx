import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setMobileMenuOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMobileMenuOpen(false);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">MyApp</Typography>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '1rem', display: 'none' }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>
          </div>

          {/* Mobile Menu Icon */}
          <IconButton 
            edge="end" 
            color="inherit" 
            aria-label="menu" 
            onClick={handleMenuOpen} 
            sx={{ display: { xs: 'block', sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={isMobileMenuOpen}
            onClose={handleMenuClose}
            sx={{
              display: { xs: 'block', sm: 'none' }
            }}
          >
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>About</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
          </Menu>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
