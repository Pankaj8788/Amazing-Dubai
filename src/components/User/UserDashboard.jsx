import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";

import {
  Box,
  Typography,
  LinearProgress,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserDashboard = () => {
  const [progressData, setProgressData] = useState(null);
  const [coinRate, setCoinRate] = useState(null);
  const [coinHistory, setCoinHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("authToken");

  const ColorfulTypography = styled(Typography)({
    background: "linear-gradient(180deg,rgb(198, 248, 17),rgb(83, 12, 51))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)", // 3D effect
    fontWeight: "bold",
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const progressResponse = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/user/progress",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const rateResponse = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/public/getcoinrate",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const historyResponse = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/public/coinratehistory",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (progressResponse.status === 200)
          setProgressData(progressResponse.data);
        if (rateResponse.status === 200) setCoinRate(rateResponse.data.rate);
        if (historyResponse.status === 200)
          setCoinHistory(historyResponse.data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [token]);

  if (loading) {
    return (
      <Container>
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Loading dashboard data...
        </Typography>
      </Container>
    );
  }

  if (!progressData) {
    return (
      <Container>
        <Typography variant="h6" align="center" sx={{ mt: 4 }}>
          Failed to load dashboard data.
        </Typography>
      </Container>
    );
  }

  const { percentageAchieved, message } = progressData;

  const graphData = {
    labels: coinHistory.map((item) =>
      new Date(item.effectiveDate).toLocaleTimeString()
    ),
    datasets: [
      {
        label: "Coin Rate",
        data: coinHistory.map((item) => item.rate),
        borderColor: "#4caf50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Dashboard
      </Typography>


      <Box sx={{ mt: 1, textAlign: "center" }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontSize: "1.2rem",
            color: "#333",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
          }}
        >
          {percentageAchieved} Achieved
        </Typography>
        <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
          <LinearProgress
            variant="determinate"
            value={parseFloat(percentageAchieved)}
            sx={{
              height: 12,
              borderRadius: 6,
              backgroundColor: "#e0e0e0",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
              "& .MuiLinearProgress-bar": {
                transition: "all 0.5s ease-in-out", // Smooth animation for progress bar
                background:
                  percentageAchieved > 50
                    ? "linear-gradient(90deg, #4caf50, #76c7c0)" // Gradient for positive progress
                    : "linear-gradient(90deg,rgb(10, 233, 77), #f57c00)", // Gradient for negative progress
              },
            }}
          />
        </Box>
        <ColorfulTypography variant="h4" component="h1" sx={{ mb: 2 }}>
          {message}
        </ColorfulTypography>
      </Box>

      {/* Coin Rate Card */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 3 }}>
        <Card
          sx={{
            display: "inline-block",
            minWidth: 275,
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
            background: "linear-gradient(180deg, #FFD700, #8A681D)",

            color: "#ffffff",
            borderRadius: 3, // Rounded corners
            padding: 2, // Added padding for spacing
            transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth hover effect
            "&:hover": {
              transform: "scale(1.05)", // Slightly enlarge the card on hover
              boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.2)", // Stronger shadow on hover
            },
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                letterSpacing: 1, // Adds spacing between letters for better readability
                textTransform: "uppercase", // Capitalizes the text for emphasis
              }}
            >
              Current Coin Rate
            </Typography>
            <Typography
              variant="h6"
              sx={{
                mt: 1,
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                letterSpacing: 0.5, // Adds a slight letter spacing for a modern look
                fontSize: "1.2rem", // Increased font size for better visibility
                textAlign: "center",
              }}
            >
              {coinRate ? `${coinRate} -/INR` : "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Coin Rate History Card */}
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 3,
          background: "linear-gradient(45deg, rgb(124, 18, 82), #7873f5, rgb(3, 10, 5))"
        }}
      >
        <Card
          sx={{
            boxShadow: 6,
            borderRadius: 3,
            padding: 0,
            maxWidth: 500,
            minWidth: 300,
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#000000",
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              Coin Rate Chart
            </Typography>
            <Line data={graphData} />
          </Grid>
        </Card>
        <Card
          sx={{
            boxShadow: 6,
            borderRadius: 3,
            padding: 2,
            maxWidth: 500,
            minWidth: 300,
            background: "linear-gradient(180deg, #FFD700, #8A681D)",
            color: "#ffffff",
            textAlign: "center",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: "#000000",
                fontWeight: 700,
                fontFamily: "Poppins, sans-serif",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Coin Rate History
            </Typography>
            {coinHistory.length > 0 ? (
              <Box
                sx={{
                  maxHeight: 200,
                  overflowY: "auto",
                  padding: "0.5rem",
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                  borderRadius: 2,
                }}
              >
                {coinHistory.map((history) => (
                  <Typography
                    key={history.id}
                    sx={{
                      color: "#f1f1f1",
                      fontWeight: 500,
                      fontFamily: "Poppins, sans-serif",
                      backgroundColor: "rgba(0, 0, 0, 0.2)",
                      borderRadius: 1,
                      padding: "0.5rem",
                      marginBottom: "0.5rem",
                      // boxShadow: "0px 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    {`Rate: ${history.rate} -/INR | Effective Date: ${new Date(
                      history.effectiveDate
                    ).toLocaleString()}`}
                  </Typography>
                ))}
              </Box>
            ) : (
              <Typography
                sx={{
                  color: "#ffeb3b",
                  fontWeight: 600,
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                No history available.
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default UserDashboard;
