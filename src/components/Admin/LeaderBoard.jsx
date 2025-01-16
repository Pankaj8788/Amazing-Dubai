import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  Avatar,
  Paper,
  CircularProgress,
  Alert,
  Grid,
  Tab,
  Tabs,
  TextField,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import CoinLogo from "../Assets/home_web/coin_img1.png"; // Watermark image
import successUserSound from "../Assets/success_user_create.mp3"; // Success sound

// Styled Components
const LeaderBoardContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  maxWidth: "100%",
  width: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  borderRadius: 16,
  backgroundColor: "rgba(0, 0, 0, 0.8)", // Slightly transparent black
  boxShadow: theme.shadows[4],
  color: "#FFFFFF",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const LeaderHeader = styled(Typography)({
  textAlign: "center",
  fontSize: "2rem",
  fontWeight: 700,
  marginBottom: "16px",
  color: "#00A8E8",
});

const StyledListItem = styled(ListItem)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "16px 8px",
  "&:last-child": {
    borderBottom: "none",
  },
});

const MedalIcon = styled(Box)(({ rank }) => {
  const medalColors = ["#FFD700", "#C0C0C0", "#CD7F32"]; // Gold, Silver, Bronze
  return {
    backgroundColor: medalColors[rank - 1] || "#4A4A4A",
    color: "#FFFFFF",
    fontWeight: "bold",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
  };
});

const PlayerName = styled(Typography)({
  fontWeight: 600,
  fontSize: "1rem",
  color: "#FFFFFF",
});

const DetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "center",
  gap: "4px",
  color: "#FFD700",
});

// Main Component
const LeaderBoard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [amount, setAmount] = useState("");
  const [calculatedCoins, setCalculatedCoins] = useState(null);
  const [calcError, setCalcError] = useState(null);

  const token = localStorage.getItem("authToken");

  // Fetch Leaderboard Data
  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/public/leaderboard",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLeaderboard(response.data.leaderboard);
      } catch (error) {
        setError("Failed to fetch leaderboard. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [token]);

  // Play Sound
  const playSound = () => {
    const audio = new Audio(successUserSound);
    audio.play();
  };

  // Handle Coin Calculation
  const handleCalculateCoins = async () => {
    setCalcError(null);
    setCalculatedCoins(null);

    if (!amount || isNaN(amount)) {
      setCalcError("Please enter a valid amount.");
      return;
    }

    try {
      const response = await axios.post(
        "https://apiamazingdubai.ipaisa.co.in/api/public/calculatecoins",
        { amount: Number(amount) },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCalculatedCoins(response.data);
      playSound(); // Play success sound
    } catch (error) {
      setCalcError("Failed to calculate coins. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        marginTop: 6,
        // background: "linear-gradient(45deg, rgb(37, 31, 35), rgb(89, 86, 161), rgb(5, 15, 8))",
        background:
          "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))",
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Watermark */}
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: 0.1,
          zIndex: 0,
          backgroundImage: `url(${CoinLogo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "60%",
          height: "60%",
        }}
      />

      {/* Tabs */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 800,
          margin: "auto",
          zIndex: 1,
          position: "relative",
        }}
      >
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          variant="fullWidth"
          textColor="inherit"
          sx={{ marginTop: 4 }}
        >
          <Tab sx={{ backgroundColor: "#FFFFFF" }} label="Leaderboard" />
          <Tab
            sx={{ backgroundColor: "#FFFFFF", ml: 2 }}
            label="Coins Calculator"
          />
        </Tabs>
      </Box>

      <Grid container justifyContent="center" mt={4}>
        {/* Leaderboard Tab */}
        {activeTab === 0 && (
          <LeaderBoardContainer>
            <LeaderHeader>LEADERBOARD</LeaderHeader>
            {loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="200px"
              >
                <CircularProgress />
              </Box>
            ) : error ? (
              <Alert severity="error">{error}</Alert>
            ) : (
              <List>
                {leaderboard.map((user, index) => (
                  <StyledListItem key={user.id}>
                    <Box display="flex" alignItems="center" gap={2}>
                      <MedalIcon rank={user.rank}>
                        {index < 3 ? "" : user.rank}
                      </MedalIcon>
                      <PlayerName>
                        {user.firstname} {user.lastname}
                      </PlayerName>
                    </Box>
                    <DetailsContainer>
                      <Typography variant="body2">Rank: {user.rank}</Typography>
                      <Typography variant="body2">
                        Achieved: {user.percentageAchieved}
                      </Typography>
                      <Typography variant="body2">
                        Coins: {user.investedCoins}/{user.targetCoins}
                      </Typography>
                    </DetailsContainer>
                  </StyledListItem>
                ))}
              </List>
            )}
          </LeaderBoardContainer>
        )}

        {/* Coins Calculator Tab */}
        {activeTab === 1 && (
          <LeaderBoardContainer>
            <LeaderHeader>COINS CALCULATOR</LeaderHeader>
            <Box
              display="flex"
              flexDirection="column"
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <TextField
                label="Enter Amount"
                variant="outlined"
                fullWidth
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                sx={{ backgroundColor: "#FFFFFF" }}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCalculateCoins}
                fullWidth
                sx={{ width: "600px", height: "40px" }}
              >
                Calculate
              </Button>
              {calcError && <Alert severity="error">{calcError}</Alert>}
              {calculatedCoins && (
                <Box mt={2} textAlign="center">
                  <Box
                    sx={{
                      textAlign: "center",
                      padding: "8px 20px",
                      backgroundColor: "#f4f6f8",
                      borderRadius: "8px",
                      boxShadow: 2,
                    }}
                  >
                    <Typography
                      variant="h6"
                      color="success.main"
                      fontWeight="bold"
                    >
                      Coins: {calculatedCoins.coins}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body1"
                    color="secondary"
                    fontWeight="bold"
                    sx={{ fontSize: "1.2rem", marginBottom: 1 }}
                  >
                    Rate: {calculatedCoins.rate} coins per amount
                  </Typography>
                </Box>
              )}
            </Box>
          </LeaderBoardContainer>
        )}
      </Grid>
    </Box>
  );
};

export default LeaderBoard;
