import React, { useEffect, useState } from "react";
import { Box, Grid, Typography, Paper, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import { styled } from "@mui/system";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleIcon from "@mui/icons-material/People";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register the necessary components from Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DashboardContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  padding: "16px",
});

const Header = styled(Box)({
  // background: "linear-gradient(180deg,rgb(196, 196, 9),rgb(196, 196, 9))",
  background: "linear-gradient(180deg, #FFD700, #8A681D)",

  color: "#fff",
  padding: "16px",
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  borderRadius: "8px",
});

const ContentArea = styled(Grid)({
  marginTop: "16px",
  flexGrow: 1,
});

const DashboardCard = styled(Paper)({
  padding: "16px",
  textAlign: "center",
  fontSize: "1rem",
  color: "#333",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const CardIcon = styled(Box)({
  fontSize: "3rem",
  color: "#1976d2",
  marginBottom: "8px",
});

const CardTitle = styled(Typography)({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: "4px",
});

const CardValue = styled(Typography)({
  fontSize: "1.5rem",
  color: "#1976d2",
  fontWeight: "bold",
});

function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [userProgress, setUserProgress] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch user data
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // Get user data (total users, investedCoins, targetAchieved)
    axios
      .get("https://apiamazingdubai.ipaisa.co.in/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch user progress data (user-wise progress)
    axios
      .get("https://apiamazingdubai.ipaisa.co.in/api/admin/getallusersprogress", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setUserProgress(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user progress:", error);
      });
  }, []);

  if (!userData || !userProgress) {
    return <Typography>Loading...</Typography>; // Loading state
  }

  const totalUsers = userData.length;
  const totalInvestedCoins = userData.reduce(
    (total, user) => total + user.investedCoins,
    0
  );
  const totalTargetAchieved = userData.filter((user) => user.targetAchieved).length;

  // Doughnut chart data for overall progress
  const overallDoughnutData = {
    labels: ["Achieved", "Remaining"],
    datasets: [
      {
        data: [
          (totalTargetAchieved / totalUsers) * 100, // Percentage of users who achieved their targets
          100 - (totalTargetAchieved / totalUsers) * 100,
        ],
        backgroundColor: ["#1976d2", "#e0e0e0"],
      },
    ],
  };

  // Handle user selection from dropdown
  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  // Doughnut chart data for the selected user's progress
  const selectedUserProgress = userProgress.find((user) => user.id === selectedUser);
  const userDoughnutData = selectedUserProgress
    ? {
        labels: ["Achieved", "Remaining"],
        datasets: [
          {
            data: [
              parseFloat(selectedUserProgress.percentageAchieved.replace(" %", "")),
              100 - parseFloat(selectedUserProgress.percentageAchieved.replace(" %", "")),
            ],
            backgroundColor: ["#008000", "#FFFF00"],
          },
        ],
      }
    : overallDoughnutData;

  return (
    <DashboardContainer mt={8}>
      {/* Header */}
      <Header>Dashboard</Header>

      {/* Content Area */}
      <ContentArea container spacing={3}>
        {/* Card 1: Revenue */}
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard elevation={3} 
          sx={{background: "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",}}>
            <CardIcon >
              <AttachMoneyIcon fontSize="inherit" sx={{color:'#FFD700'}}/>
            </CardIcon>
            <CardTitle sx={{color:'#fff'}}>Total Revenue</CardTitle>
            <CardValue sx={{color:'#FFD700'}}>{`$${totalInvestedCoins}`}</CardValue>
          </DashboardCard>
        </Grid>

        {/* Card 2: Users */}
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard elevation={3}
          sx={{
            background: "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",}}
          >
            <CardIcon>
              <PeopleIcon fontSize="inherit" sx={{color:'#FFD700'}} />
            </CardIcon>
            <CardTitle sx={{color:'#fff'}}>Total Users</CardTitle>
            <CardValue sx={{color:'#FFD700'}}>{totalUsers}</CardValue>
          </DashboardCard>
        </Grid>

        {/* Card 3: Target Achieved */}
        <Grid item xs={12} sm={6} md={4}>
          <DashboardCard elevation={3}
           sx={{background: "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",}}
          >
            <CardIcon>
              <TrendingUpIcon fontSize="inherit" sx={{color:'#FFD700'}} />
            </CardIcon>
            <CardTitle sx={{color:'#fff'}}>Target Achieved</CardTitle>
            <CardValue sx={{color:'#FFD700'}}>{`${totalTargetAchieved} / ${totalUsers}`}</CardValue>
          </DashboardCard>
        </Grid>

        {/* User Dropdown for Progress Selection */}
        <Grid item xs={12} sm={6} md={4}>
          <FormControl fullWidth>
            <InputLabel>Select User</InputLabel>
            <Select
              value={selectedUser}
              onChange={handleUserChange}
              label="Select User"
            >
              <MenuItem value={null}>Overall Progress</MenuItem>
              {userProgress.map((user) => (
                <MenuItem key={user.id} value={user.id}>
                  {`${user.firstname} ${user.lastname}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Doughnut Chart for Selected User or Overall Progress */}
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px", textAlign: "center" }}
          sx={{background: "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",}}
          >
            <Typography variant="h6" style={{ marginBottom: "16px",color:'#fff' }}>
              {selectedUser ? `User Progress` : `Overall Progress`}
            </Typography>
            <Doughnut data={userDoughnutData} />
          </Paper>
        </Grid>
      </ContentArea>
    </DashboardContainer>
  );
}

export default Dashboard;
