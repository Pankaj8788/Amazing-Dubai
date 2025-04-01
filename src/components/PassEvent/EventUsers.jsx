import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  TableRow,
  Paper,
  Typography,
  TablePagination,
  TextField,
  Button,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import axios from "axios";
import Swal from "sweetalert2";
import { debounce } from "lodash";
import { saveAs } from "file-saver";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import "jspdf-autotable";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "& .MuiButton-root": {
    minWidth: "120px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    "& .MuiButton-root": {
      width: "100%",
    },
  },
}));

const UserListContainer = styled(Box)({
  padding: "16px",
  marginTop: "20px",
});

const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  marginTop: "16px",
  
  "& .MuiButton-root": {
    minWidth: "120px",
  },
});

const EventUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useState({
    userId: "",
    fullName: "",
    occupation: "",
    email: "",
    mobileNo: "",
    passNumber: "",
  });

  useEffect(() => {
    const fetchEventUsers = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/admin/getalleventusers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data.users);
        setLoading(false);
      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
        setLoading(false);
      }
    };

    fetchEventUsers();
  }, []);

  const exportToCSV = () => {
    const exportData = users.map((user) => ({
      "User ID": user.userId,
      "Full Name": user.fullName,
      Email: user.email,
      "Mobile No": user.mobileNo,
      Occupation: user.occupation,
      "Event Pass": user.eventPass.passNumber,
      "Event Date": user.eventPass.eventDate,
      "Created At": user.createdAtIST,
      Attendance: user.eventPass.isPresent ? "Present" : "Absent",
      "User Created": user.eventPass.userCreated ? "Yes" : "No",
      "Pass Sent": user.eventPass.passSent ? "Yes" : "No",
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Event Users");

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    const fileName = `event_users_${new Date().toLocaleDateString().replace(/\//g, "-")}.xlsx`;
    saveAs(data, fileName);
  };

  const exportToPDF = () => {
    const doc = new jsPDF("landscape");

    const tableColumn = [
      "Sr No",
      "User ID",
      "Full Name",
      "Email",
      "Mobile No",
      "Occupation",
      "Event Pass",
      "Event Date",
      "Attendance",
      "Pass Sent",
    ];

    const tableRows = users.map((user) => [
      users.indexOf(user) + 1,
      user.userId,
      user.fullName,
      user.email,
      user.mobileNo,
      user.occupation,
      user.eventPass.passNumber,
      user.eventPass.eventDate,
      user.eventPass.isPresent ? "Present" : "Absent",
      user.eventPass.passSent ? "Yes" : "No",
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
      theme: "grid",
      styles: {
        fontSize: 7,
        cellPadding: 1,
        overflow: "linebreak",
        halign: "center",
      },
      headStyles: {
        fillColor: [2, 123, 254],
        textColor: [255, 255, 255],
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [240, 240, 240],
      },
      margin: { top: 20 },
    });

    const fileName = `event_users_${new Date().toLocaleDateString().replace(/\//g, "-")}.pdf`;
    doc.save(fileName);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = async () => {
    const query = Object.entries(searchParams)
      .filter(([, value]) => value.trim() !== "")
      .map(([key, value]) => `${key}=${encodeURIComponent(value.trim())}`)
      .join("&");

    if (!query) {
      Swal.fire(
        "Warning",
        "Please enter at least one search parameter.",
        "warning"
      );
      return;
    }

    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/advancedsearch?${query}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.users.length === 0) {
        Swal.fire("No Results", "No users found for the given query.", "info");
        setSearchResults([]);
      } else {
        setSearchResults(response.data.users);
      }
    } catch (error) {
      Swal.fire("Error", "Failed to fetch search results.", "error");
    }
  };

  const debouncedHandleSearchInputChange = debounce((field, value) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  }, 300);

  const handleSearchInputChange = (field, value) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
    debouncedHandleSearchInputChange(field, value);
  };

  const handleMarkAsSent = async (eventUserId) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.post(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/markpasssent",
        { eventUserId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message === "Pass marked as sent successfully.") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Pass marked as sent successfully!",
        });

        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.userId === eventUserId
              ? {
                  ...user,
                  eventPass: {
                    ...user.eventPass,
                    passSent: true,
                  },
                }
              : user
          )
        );
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response ? error.response.data.message : error.message,
      });
    }
  };

  const handleClearSearch = () => {
    setSearchParams({
      userId: "",
      fullName: "",
      occupation: "",
      email: "",
      mobileNo: "",
      passNumber: "",
    });
    setSearchResults([]);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const displayData = searchResults.length > 0 ? searchResults : users;

  return (
    <UserListContainer>
      <Typography sx={{ mt: 6 }} variant="h5" align="center">
        Event Users
      </Typography>

      <ResponsiveBox mb={2}>
        <TextField
          label="User ID"
          variant="outlined"
          value={searchParams.userId}
          onChange={(e) => handleSearchInputChange("userId", e.target.value)}
          size="small"
        />
        <TextField
          label="Full Name"
          variant="outlined"
          value={searchParams.fullName}
          onChange={(e) => handleSearchInputChange("fullName", e.target.value)}
          size="small"
        />
        <TextField
          label="Occupation"
          variant="outlined"
          value={searchParams.occupation}
          onChange={(e) =>
            handleSearchInputChange("occupation", e.target.value)
          }
          size="small"
        />
        <TextField
          label="Email"
          variant="outlined"
          value={searchParams.email}
          onChange={(e) => handleSearchInputChange("email", e.target.value)}
          size="small"
        />
        <TextField
          label="Mobile No."
          variant="outlined"
          value={searchParams.mobileNo}
          onChange={(e) => handleSearchInputChange("mobileNo", e.target.value)}
          size="small"
        />
        <TextField
          label="Pass Number"
          variant="outlined"
          value={searchParams.passNumber}
          onChange={(e) =>
            handleSearchInputChange("passNumber", e.target.value)
          }
          size="small"
        />
        
        {/* <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button> */}
      </ResponsiveBox>

      <ButtonGroup>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="outlined" color="primary" onClick={handleClearSearch}>
          Clear Search
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={exportToCSV}
          startIcon={<FileDownloadIcon />}
        >
          Export Excel
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={exportToPDF}
          startIcon={<PictureAsPdfIcon />}
        >
          Export PDF
        </Button>
      </ButtonGroup>

      <TableContainer
        component={Paper}
        sx={{
          mt: 3,
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          background: "linear-gradient(135deg, #2C2D31 30%, #0A29DD 90%)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="event users table">
          <TableHead style={{ backgroundColor: "#027BFE", color: "white" }}>
            <TableRow>
              {[
                "S. No",
                "User ID",
                "Full Name",
                "Email",
                "Mobile No",
                "Occupation",
                "Event Pass",
                "Event Date",
                "Created At",
                "Attendance",
                "User Created",
                "Pass Sent",
              ].map((header) => (
                <TableCell
                  key={header}
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {(searchResults.length > 0 ? searchResults : users)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={user.userId}>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.userId}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.fullName}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.email}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.mobileNo}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.occupation}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.eventPass.passNumber}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.eventPass.eventDate}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.createdAtIST}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: user.eventPass.isPresent ? "#006400" : "red",
                      fontWeight: "bold",
                      backgroundColor: user.eventPass.isPresent
                        ? "#ccffcc"
                        : "#ffcccc",
                      borderRadius: "2px",
                      padding: "2px",
                    }}
                    align="center"
                  >
                    {user.eventPass.isPresent ? "Present" : "Absent"}
                  </TableCell>
                  <TableCell
                    sx={{
                      color: user.eventPass.userCreated ? "#006400" : "red",
                      fontWeight: "bold",
                      backgroundColor: user.eventPass.userCreated
                        ? "#ccffcc"
                        : "#ffcccc",
                      borderRadius: "2px",
                      padding: "2px",
                    }}
                    align="center"
                  >
                    {user.eventPass.userCreated ? "Yes" : "No"}
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color={user.eventPass.passSent ? "success" : "error"}
                      onClick={() => handleMarkAsSent(user.userId)}
                      disabled={user.eventPass.passSent}
                      sx={{
                        fontWeight: user.eventPass.passSent ? "bold" : "normal",
                        color: user.eventPass.passSent ? "#FFFFFF" : "black",
                        backgroundColor: user.eventPass.passSent
                          ? "#388E3C"
                          : "#FFD700",
                        "&:hover": {
                          backgroundColor: user.eventPass.passSent
                            ? "#2C6B32"
                            : "#d32f2f",
                        },
                        borderRadius: "8px",
                        padding: "10px 20px",
                        textTransform: "none",
                        boxShadow: user.eventPass.passSent
                          ? "0 4px 12px rgba(0, 100, 0, 0.3)"
                          : "0 4px 12px rgba(255, 0, 0, 0.3)",
                        transition:
                          "background-color 0.3s ease, box-shadow 0.3s ease",
                      }}
                    >
                      {user.eventPass.passSent ? "Sent" : "Mark as Sent"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ color: "#000000" }}
      />
    </UserListContainer>
  );
};

export default EventUsers;
