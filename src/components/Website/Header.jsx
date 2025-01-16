// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box, useTheme } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link as RouterLink } from 'react-router-dom';
// import Logo from './../Assets/Logo.jpg'; // Import the logo
// import { useNavigate } from 'react-router-dom';


// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();
//   const openMenu = Boolean(anchorEl);
//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     handleMenuClose(); // Close the menu
//     navigate('/login'); // Navigate to /login
//   };

//   // Handle opening and closing of the menu (hamburger icon)
//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   // Smooth scroll to a section
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background: 'linear-gradient(180deg, #FFD700, #8A681D)', // Gradient background
//         height: '100px', // Increased height of the header
//         boxShadow: 2,
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* Logo Section */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <img
//             src={Logo}
//             alt="Logo"
//             style={{
//               width: 80, // Increased size of the logo
//               height: 80, // Increased size of the logo
//               borderRadius: '50%', // Round shape
//               marginRight: 10,
//               marginTop: 10, // Added top margin for the logo
//               boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // Logo shadow for a polished look
//             }}
//           />
          
//           <Typography
//       variant="h6"
//       sx={{
//         color: '#fff',
//         fontWeight: 'bold',
//         letterSpacing: '2px',
//         fontFamily: 'cursive', // Add cursive font here
//       }}
//     >
//       <RouterLink to="/" style={{ textDecoration: 'none', color: '#fff' }}>
//         Amazing Dubai
//       </RouterLink>
//     </Typography>
//         </Box>

//         {/* Desktop Navigation */}
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
//           <Button
//             color="inherit"
//             onClick={() => scrollToSection('hero-section')}
//             sx={{
//               '&:hover': { backgroundColor: '#ffffff29' }, // Subtle hover effect
//               fontWeight: 'bold',
//               textTransform: 'uppercase',
//               // background: 'linear-gradient(45deg, #ff6ec4, #7873f5, #1ed760)',
//             }}
//           >
//             Home
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => scrollToSection('about-us-section')}
//             sx={{
//               '&:hover': { backgroundColor: '#ffffff29' }, // Subtle hover effect
//               fontWeight: 'bold',
//               textTransform: 'uppercase',
//               // background: 'linear-gradient(45deg, #ff6ec4, #7873f5, #1ed760)',
//             }}
//           >
//             About Us
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => scrollToSection('services')}
//             sx={{
//               '&:hover': { backgroundColor: '#ffffff29' },
//               fontWeight: 'bold',
//               textTransform: 'uppercase',
//             }}
//           >
//             Services
//           </Button>
//           <Button
//             color="inherit"
//             onClick={() => scrollToSection('prelaunchtimestamp')}
//             sx={{
//               '&:hover': { backgroundColor: '#ffffff29' },
//               fontWeight: 'bold',
//               textTransform: 'uppercase',
//             }}
//           >
//             Token
//           </Button>
//         </Box>

       
//         <Button
//   color="success"
//   variant="contained"
//   component={RouterLink}
//   to="/login"
//   sx={{
//     ml: 2,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     '&:hover': { backgroundColor: '#66bb6a' }, // Slightly darker green on hover
//     borderRadius: '8px', // Apply border-radius
//     padding: '8px 16px',
//     display: { xs: 'none', sm: 'inline-block' }, // Hide login button on mobile
//   }}
// >
//   Login
// </Button>
//         {/* Hamburger Menu for Mobile */}
//         <IconButton
//           color="inherit"
//           aria-label="menu"
//           edge="end"
//           onClick={handleMenuOpen}
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Menu on Mobile */}
//         <Menu
//           anchorEl={anchorEl}
//           open={openMenu}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           <MenuItem onClick={() => { handleMenuClose(); scrollToSection('hero-section'); }}>
//             Home
//           </MenuItem>
//           <MenuItem onClick={() => { handleMenuClose(); scrollToSection('about-us-section'); }}>
//             About Us
//           </MenuItem>
//           <MenuItem onClick={() => { handleMenuClose(); scrollToSection('services'); }}>
//             Services
//           </MenuItem>
//           <MenuItem onClick={handleMenuClick}>
//             Log in
//           </MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;

// import React, { useState } from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   IconButton,
//   Menu,
//   MenuItem,
//   Box,
//   useTheme,
// } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link as RouterLink } from 'react-router-dom';
// import Logo from './../Assets/Logo.jpg'; // Import the logo
// import { useNavigate } from 'react-router-dom';

// const Header = () => {
//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();
//   const openMenu = Boolean(anchorEl);
//   const navigate = useNavigate();

//   const handleMenuClick = () => {
//     handleMenuClose(); // Close the menu
//     navigate('/login'); // Navigate to /login
//   };

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         background: 'linear-gradient(90deg, #FFD700, #FF8C00)', // Matching gradient
//         height: '80px', // Slightly reduced height
//         boxShadow: 3,
//       }}
//     >
//       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         {/* Logo Section */}
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <img
//             src={Logo}
//             alt="Logo"
//             style={{
//               width: 50,
//               height: 50,
//               borderRadius: '50%',
//               marginRight: 10,
//             }}
//           />
//           <Typography
//             variant="h6"
//             sx={{
//               color: '#000',
//               fontWeight: 'bold',
//               fontFamily: 'Poppins, sans-serif',
//               fontSize: '1.5rem',
//               letterSpacing: '1px',
//             }}
//           >
//             Amazing Dubai
//           </Typography>
//         </Box>

//         {/* Desktop Navigation */}
//         <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
//           {['Home', 'About us', 'Service', 'Event', ].map((text) => (
//             <Button
//               key={text}
//               color="inherit"
//               onClick={() => scrollToSection(text.toLowerCase().replace(' ', '-'))}
//               sx={{
//                 fontWeight: 'bold',
//                 textTransform: 'capitalize',
//                 color: '#000',
//                 '&:hover': { color: '#FF8C00' },
//               }}
//             >
//               {text}
//             </Button>
//           ))}
//         </Box>

//         {/* Login Button */}
//         <Button
//           variant="contained"
//           color="warning"
//           onClick={() => navigate('/login')}
//           sx={{
//             fontWeight: 'bold',
//             textTransform: 'uppercase',
//             borderRadius: '20px',
//             px: 3,
//             py: 1,
//             boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
//             display: { xs: 'none', md: 'inline-flex' },
//           }}
//         >
//           Sign In
//         </Button>

//         {/* Hamburger Menu for Mobile */}
//         <IconButton
//           color="inherit"
//           edge="end"
//           onClick={handleMenuOpen}
//           sx={{ display: { xs: 'block', md: 'none' } }}
//         >
//           <MenuIcon />
//         </IconButton>

//         {/* Menu on Mobile */}
//         <Menu
//           anchorEl={anchorEl}
//           open={openMenu}
//           onClose={handleMenuClose}
//           anchorOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'right',
//           }}
//         >
//           {['Home', 'About us', 'Service', 'Event','Login'].map((text) => (
//             <MenuItem
//               key={text}
//               onClick={() => {
//                 handleMenuClose();
//                 scrollToSection(text.toLowerCase().replace('', '-'));
//               }}
//             >
//               {text}
//             </MenuItem>
//           ))}
//           <MenuItem onClick={handleMenuClick}>Sign In</MenuItem>
//         </Menu>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


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
