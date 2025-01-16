///ORIGINAL

import React, { useState, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Swal from "sweetalert2";
import { Download } from "@mui/icons-material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import { saveAs } from "file-saver";
import {
  Box,
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Switch,
} from "@mui/material";
import { styled } from "@mui/system";

const UserListContainer = styled(Box)({
  padding: "16px",
  marginTop: "20px",
});

const Title = styled(Typography)({
  fontSize: "1.5rem",
  fontWeight: "bold",
  marginBottom: "20px",
});

const TableWrapper = styled(TableContainer)({
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
});

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "16px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const token = localStorage.getItem("authToken");

const CustomSwitch = styled(Switch)(({ theme, checked }) => ({
  "& .MuiSwitch-switchBase": {
    color: checked ? "gold" : "red", // Change color for active and inactive states
    "&.Mui-checked": {
      color: "gold", // Active state color
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: checked ? "gold" : "red", // Track color for active and inactive states
  },
}));

const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  marginTop: "16px",
  marginBottom: "16px",
  "& .MuiButton-root": {
    minWidth: "120px",
  },
});

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({});
  const [searchResults, setSearchResults] = useState([]);
  const displayedUsers = searchResults.length > 0 ? searchResults : users;

  const [searchParams, setSearchParams] = useState({
    id: "",
    firstname: "",
    lastname: "",
    email: "",
    mobileno: "",
  });

  const DownloadButton = styled(Button)({
    margin: "0 8px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/admin/users",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users.", error);
      }
    };

    fetchUsers();
  }, [token]);

  const handleToggleActivation = async (userId, currentStatus) => {
    try {
      const response = await axios.put(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/toggleuseractivation/${userId}`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Swal.fire(
        "Success",
        `User has been ${
          response.data.isActive ? "activated" : "deactivated"
        } successfully.`,
        "success"
      );

      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === userId
            ? { ...user, isActive: response.data.isActive }
            : user
        )
      );
    } catch (error) {
      Swal.fire("Error", "Failed to toggle user activation.", "error");
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDeleteClick = (user) => {
    setSelectedUser(user);
    setOpenDeleteDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
    setSelectedUser(null);
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
      const response = await axios.get(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/mainsearch?${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.length === 0) {
        Swal.fire("No Results", "No users found for the given query.", "info");
      }
      setSearchResults(response.data);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch search results.", "error");
    }
  };

  const handleSearchInputChange = (field, value) => {
    setSearchParams((prevParams) => ({
      ...prevParams,
      [field]: value,
    }));
  };

  const handleDeleteUser = async () => {
    try {
      await axios.delete(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/delete/${selectedUser.id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Swal.fire("Deleted!", "User deleted successfully", "success");
      setUsers(users.filter((user) => user.id !== selectedUser.id));
      setOpenDeleteDialog(false);
    } catch (error) {
      Swal.fire("Error!", "Failed to delete user", "error");
    }
  };

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setUpdatedUser({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      mobileno: user.mobileno,
      role: user.role,
    });
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
    setSelectedUser(null);
  };

  const handleUpdateUser = async () => {
    try {
      await axios.put(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/update/${selectedUser.id}`,
        updatedUser,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      Swal.fire("Updated!", "User details updated successfully", "success");
      setUsers(
        users.map((user) =>
          user.id === selectedUser.id ? { ...user, ...updatedUser } : user
        )
      );
      setOpenEditDialog(false);
    } catch (error) {
      Swal.fire("Error!", "Failed to update user", "error");
    }
  };

  const downloadCSV = async () => {
    try {
      const response = await axios.get(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const csvData = response.data;
      const headers = [
        "ID",
        "First Name",
        "Last Name",
        "Email",
        "Mobile No",
        "Created At",
        "Last Login",
        "Status",
      ];

      const csvContent = [
        headers.join(","),
        ...csvData.map((user) =>
          [
            user.id,
            user.firstname,
            user.lastname,
            user.email,
            user.mobileno,
            new Date(user.createdAt).toLocaleString(),
            user.lastLogin
              ? new Date(user.lastLogin).toLocaleString()
              : "Not logged in yet",
            user.isActive ? "Active" : "Inactive",
          ].join(",")
        ),
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
      saveAs(blob, "user_data.csv");

      Swal.fire("Success", "CSV file downloaded successfully!", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to download CSV file.", "error");
    }
  };

  const downloadPDF = async () => {
    try {
      const response = await axios.get(
        "https://apiamazingdubai.ipaisa.co.in/api/admin/users",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const doc = new jsPDF();

      // Add title
      doc.setFontSize(16);
      doc.text("User List Report", 14, 15);
      doc.setFontSize(10);
      doc.text(`Generated on: ${new Date().toLocaleString()}`, 14, 25);

      const tableColumn = [
        "ID",
        "Name",
        "Email",
        "Mobile No",
        "Created At",
        "Status",
      ];

      const tableRows = response.data.map((user) => [
        user.id,
        `${user.firstname} ${user.lastname}`,
        user.email,
        user.mobileno,
        new Date(user.createdAt).toLocaleString(),
        user.isActive ? "Active" : "Inactive",
      ]);

      doc.autoTable({
        head: [tableColumn],
        body: tableRows,
        startY: 35,
        styles: {
          fontSize: 8,
          cellPadding: 2,
          overflow: "linebreak",
        },
        columnStyles: {
          0: { cellWidth: 20 },
          1: { cellWidth: 40 },
          2: { cellWidth: 50 },
          3: { cellWidth: 30 },
          4: { cellWidth: 30 },
          5: { cellWidth: 20 },
        },
      });

      doc.save("user_data.pdf");
      Swal.fire("Success", "PDF file downloaded successfully!", "success");
    } catch (error) {
      Swal.fire("Error", "Failed to download PDF file.", "error");
    }
  };

  return (
    <UserListContainer>
      <Title sx={{ mt: 6 }} variant="h5">
        User List
      </Title>
      <ResponsiveBox mb={2}>
        <TextField
          label="ID"
          variant="outlined"
          value={searchParams.id}
          onChange={(e) => handleSearchInputChange("id", e.target.value)}
          size="small"
        />
        <TextField
          label="First Name"
          variant="outlined"
          value={searchParams.firstname}
          onChange={(e) => handleSearchInputChange("firstname", e.target.value)}
          size="small"
        />
        <TextField
          label="Last Name"
          variant="outlined"
          value={searchParams.lastname}
          onChange={(e) => handleSearchInputChange("lastname", e.target.value)}
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
          value={searchParams.mobileno}
          onChange={(e) => handleSearchInputChange("mobileno", e.target.value)}
          size="small"
        />
      </ResponsiveBox>

      <ButtonGroup>
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <DownloadButton
          variant="contained"
          color="success"
          onClick={downloadCSV}
          // startIcon={<Download />}
          startIcon={<FileDownloadIcon />}
        >
          Download CSV
        </DownloadButton>
        <DownloadButton
          variant="contained"
          color="secondary"
          onClick={downloadPDF}
          startIcon={<PictureAsPdfIcon />}
        >
          Download PDF
        </DownloadButton>
      </ButtonGroup>

      <TableWrapper
        component={Paper}
        sx={{
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          background:
            "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(10, 41, 221) 90%)",
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead
            style={{
              backgroundColor: "#027BFE",
              color: "#FFFFFF",
            }}
          >
            <TableRow>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                SR.No
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                ID
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Name
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Email
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Mobile No.
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Created At
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Last Login
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Status
              </TableCell>

              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayedUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {page * rowsPerPage + index + 1}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.id}
                  </TableCell>
                  <TableCell
                    sx={{ color: "#FFD700" }}
                    align="center"
                  >{`${user.firstname} ${user.lastname}`}</TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.email}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.mobileno}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleString()
                      : "N/A"}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {user.lastLogin
                      ? new Date(user.lastLogin).toLocaleString()
                      : "Not logged in yet"}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    <CustomSwitch
                      checked={user.isActive}
                      onChange={() =>
                        handleToggleActivation(user.id, user.isActive)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleEditClick(user)}
                      sx={{
                        width: {
                          xs: "100%", // Full width on small screens
                          sm: "auto", // Auto width on small screens and up
                        },
                        padding: {
                          xs: "8px", // Smaller padding on mobile
                          sm: "10px", // Larger padding on desktop
                        },
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDeleteClick(user)}
                      sx={{
                        marginLeft: {
                          xs: 0, // No margin on small screens
                          sm: "10px", // Margin on desktop
                        },
                        width: {
                          xs: "100%", // Full width on small screens
                          sm: "auto", // Auto width on small screens and up
                        },
                        padding: {
                          xs: "8px", // Smaller padding on mobile
                          sm: "10px", // Larger padding on desktop
                        },
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <TablePagination
        rowsPerPageOptions={[10, 20, 25]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      {/* Delete Dialog */}
      <Dialog open={openDeleteDialog} onClose={handleCloseDeleteDialog}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog}>Cancel</Button>
          <Button color="error" onClick={handleDeleteUser}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="First Name"
            fullWidth
            value={updatedUser.firstname || ""}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, firstname: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            value={updatedUser.lastname || ""}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, lastname: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={updatedUser.email || ""}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, email: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Mobile No."
            fullWidth
            value={updatedUser.mobileno || ""}
            onChange={(e) =>
              setUpdatedUser({ ...updatedUser, mobileno: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Cancel</Button>
          <Button color="primary" onClick={handleUpdateUser}>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </UserListContainer>
  );
};
export default UserList;
