import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  EmojiEvents as EmojiEventsIcon,
  Group as GroupIcon,
  Leaderboard as LeaderboardIcon,
  TrackChanges as TrackChangesIcon,
  Logout as LogoutIcon,
  LockPerson as LockPersonIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./../Assets/Logo.jpg";
import AssessmentIcon from '@mui/icons-material/Assessment';

const NAVIGATION = [
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    roles: ["ADMIN"],
  },
  {
    segment: "userdashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
    roles: ["USER"],
  },
  {
    segment: "leaderboard",
    title: "Leaderboard",
    icon: <LeaderboardIcon />,
    roles: ["USER", "ADMIN"],
  },
  {
    segment: "rewards",
    title: "Rewards",
    icon: <EmojiEventsIcon />,
    roles: ["USER", "ADMIN"],
  },
  {
    segment: "",
    title: "User ",
    icon: <GroupIcon />,
    roles: ["ADMIN"],
    children: [
      { segment: "adduser", title: "Add User" },
      { segment: "admin/userslist", title: "User  List" },
      { segment: "admin/deleteduser", title: "Deleted User" },
      { segment: "transfercoins", title: "Coin Transfer" },
      { segment: "admin/eventusers", title: "Event User" },
      { segment: "prelaunchevent/eventpass", title: "Event Pass" },
      { segment: "prelaunchedevent/passscanner", title: "Pass Scan" },

    ],
  },
  {
    segment: "mpinsetting",
    title: "MPIN Setting",
    icon: <LockPersonIcon />,
    roles: ["USER", "ADMIN"],
  },
  {
    segment: "targetsetting",
    title: "Target Setting",
    icon: <TrackChangesIcon />,
    roles: ["ADMIN"],
  },
  {
    segment: "adminreport",
    title: "Admin Report",
    icon: <AssessmentIcon />,
    roles: ["ADMIN"],
  },
  {
    segment: "userreport",
    title: "USER Report",
    icon: <AssessmentIcon />,
    roles: ["USER"],
  },
  {
    segment: "coinsetting",
    title: "Coin Setting",
    icon: <CurrencyExchangeIcon />,
    roles: ["ADMIN"],
  },
  {
    segment: "logout",
    title: "Logout",
    icon: <LogoutIcon />,
    roles: ["USER", "ADMIN"],
  },
  // {
  //   segment: "",
  //   title: "Report ",
  //   icon: <GroupIcon />,
  //   roles: ["USER", "ADMIN"],
  //   children: [
  //     { segment: "userreport", title: "User Report", roles: ["ADMIN"], },
  //     { segment: "userslist", title: "User  List" ,roles: ["USER"], },
  //   ],
  // },
];

function Sidebar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const navigate = useNavigate();

  // Fetch the role dynamically
  const role = localStorage.getItem("role") || "USER"; // Default to "USER" if not set

  // Filter navigation items based on role
  const filteredNavigation = NAVIGATION.filter((item) =>
    item.roles.includes(role)
  );

  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);

  const handleNavigation = (segment) => {
    if (segment === "logout") {
      handleLogout(); // Call logout function
    } else if (segment === "dashboard" && role === "USER") {
      navigate("/userdashboard"); // Redirect USER to userdashboard
    } else if (segment === "userdashboard" && role === "ADMIN") {
      navigate("/dashboard"); // Redirect ADMIN to dashboard
    } else {
      navigate(`/${segment}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken"); // Remove token
    localStorage.removeItem("role"); // Clear role
    navigate("/"); // Redirect to login page
  };

  const toggleSubmenu = (title) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [title]: !prevState[title],
    }));
  };
  return (
    <div style={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer - 1,
          // background: "linear-gradient(180deg,rgb(196, 196, 9),rgb(196, 193, 13))",
          background: "linear-gradient(180deg, #FFD700, #8A681D)",
        }}
      >
        
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
            Amazing Dubai
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => navigate("/userprofile")}
            sx={{ marginLeft: "auto" }}
          >
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="persistent"
        anchor="left"
        open={drawerOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            // background:
            //   "linear-gradient(180deg,rgb(196, 196, 9),rgb(196, 193, 13))",
            background: "linear-gradient(180deg, #FFD700, #8A681D)",

            color: "#fff",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
          <img
            src={Logo}
            alt="Amazing Dubai Logo"
            style={{
              height: "90px",
              marginRight: "8px",
              borderRadius: "130px",
              marginLeft: "55px",
            }}
          />
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            {drawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>
        <Divider />
        <List>
          {filteredNavigation.map((item) => (
            <React.Fragment key={item.segment || item.title}>
              <ListItem
                button
                onClick={
                  item.children
                    ? () => toggleSubmenu(item.title)
                    : () => handleNavigation(item.segment)
                }
                component={
                  !item.children && item.segment !== "logout" ? Link : "div"
                }
                to={
                  !item.children && item.segment !== "logout"
                    ? `/${item.segment}`
                    : undefined
                }
                sx={{
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <IconButton edge="start" sx={{ color: "#fff" }}>
                  {item.icon}
                </IconButton>
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    style: { color: "#fff", fontWeight: "bold" },
                  }}
                />
                {item.children &&
                  (submenuOpen[item.title] ? (
                    <ExpandLessIcon sx={{ color: "#fff" }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "#fff" }} />
                  ))}
              </ListItem>
              {item.children && submenuOpen[item.title] && (
                <List component="div" disablePadding>
                  {item.children.map((child) => (
                    <ListItem
                      button
                      key={child.segment}
                      onClick={() => handleNavigation(child.segment)}
                      component={Link}
                      to={`/${child.segment}`}
                      sx={{
                        pl: 4,
                        "&:hover": {
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                        },
                      }}
                    >
                      {/* <ListItemText primary={child.title} /> */}
                      <ListItemText
                        primary={child.title}
                        sx={{ color: "#fff" }}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          marginLeft: drawerOpen ? "250px" : "0px",
          transition: "margin-left 0.3s ease",
          // padding: "2px",
        }}
      >
        <Typography variant="h4">.</Typography>
      </Box>
    </div>
  );
}

Sidebar.propTypes = { window: PropTypes.func };

export default Sidebar;
