// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Button,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
// } from "@mui/material";
// import { styled } from "@mui/system";

// const DeletedUserContainer = styled(Box)({
//   padding: "16px",
//   marginTop: "20px",
// });

// const Title = styled(Typography)({
//   fontSize: "1.5rem",
//   fontWeight: "bold",
//   marginBottom: "20px",
// });

// const TableWrapper = styled(TableContainer)({
//   boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
// });

// const DeletedUser = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchDeletedUsers = async () => {
//       const token = localStorage.getItem("authToken");
//       try {
//         const response = await axios.get(
//           "https://apiamazingdubai.ipaisa.co.in/api/admin/deletedusers",
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching deleted users:", error);
//       }
//     };

//     fetchDeletedUsers();
//   }, []);

//   return (
//     <DeletedUserContainer>
//       <Title sx={{ mt: 6 }} variant="h5">
//         Deleted Users List
//       </Title>
//       <TableWrapper
//         component={Paper}
//         sx={{
//           borderRadius: "12px",
//           overflow: "hidden",
//           boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
//           background:
//             "linear-gradient(135deg, rgb(44, 45, 49) 30%, rgb(10, 41, 221) 90%)",
//         }}
//       >
//         <Table sx={{ minWidth: 650 }}>
//           <TableHead>
//             <TableRow>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Sr.No
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 First Name
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Last Name
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Email
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Mobile No
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Role
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Created At
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Last Login
//               </TableCell>
//               <TableCell
//                 sx={{
//                   color: "#FFFFFF",
//                   textAlign: "center",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Restore
//               </TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {users.map((user, index) => (
//               <TableRow key={user.id}>
//                 <TableCell sx={{ color: "white" }}>{index + 1}</TableCell>
//                 <TableCell sx={{ color: "white" }}>{user.firstname}</TableCell>
//                 <TableCell sx={{ color: "white" }}>
//                   {user.lastname || "N/A"}
//                 </TableCell>
//                 <TableCell sx={{ color: "white" }}>{user.email}</TableCell>
//                 <TableCell sx={{ color: "white" }}>{user.mobileno}</TableCell>
//                 <TableCell sx={{ color: "white" }}>{user.role}</TableCell>
//                 <TableCell sx={{ color: "white" }}>
//                   {new Date(user.createdAt).toLocaleString()}
//                 </TableCell>
//                 <TableCell sx={{ color: "white" }}>
//                   {new Date(user.lastLogin).toLocaleString()}
//                 </TableCell>
//                 <Button
//                 sx={{ color: "green" }}
//                 >Restore</Button>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableWrapper>
//     </DeletedUserContainer>
//   );
// };

// export default DeletedUser;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"; // Import Swal
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore"; // Import Restore icon
import { styled } from "@mui/system";

const DeletedUserContainer = styled(Box)({
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

const DeletedUser = () => {
  const [users, setUsers] = useState([]);

  // Fetch deleted users
  useEffect(() => {
    const fetchDeletedUsers = async () => {
      const token = localStorage.getItem("authToken");
      try {
        const response = await axios.get(
          "https://apiamazingdubai.ipaisa.co.in/api/admin/deletedusers",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching deleted users:", error);
      }
    };

    fetchDeletedUsers();
  }, []);

  // Restore user
  const handleRestore = async (userId) => {
    const token = localStorage.getItem("authToken");
    try {
      const response = await axios.put(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/restoredeleteduser/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Show success message using Swal
      Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message || "User restored successfully!",
      });

      // Refresh the users list
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      // Show error message using Swal
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.message || "Failed to restore user!",
      });
    }
  };

  return (
    <DeletedUserContainer>
      <Title sx={{ mt: 6 }} variant="h5">
        Deleted Users List
      </Title>
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
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Sr.No
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                First Name
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Last Name
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
                Mobile No
              </TableCell>
              <TableCell
                sx={{
                  color: "#FFFFFF",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Role
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
                Restore
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell sx={{ color: "white" }}>{index + 1}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.firstname}</TableCell>
                <TableCell sx={{ color: "white" }}>
                  {user.lastname || "N/A"}
                </TableCell>
                <TableCell sx={{ color: "white" }}>{user.email}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.mobileno}</TableCell>
                <TableCell sx={{ color: "white" }}>{user.role}</TableCell>
                <TableCell sx={{ color: "white" }}>
                  {new Date(user.createdAt).toLocaleString()}
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  {new Date(user.lastLogin).toLocaleString()}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="success"
                    startIcon={<RestoreIcon />}
                    onClick={() => handleRestore(user.id)}
                  >
                    Restore
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </DeletedUserContainer>
  );
};

export default DeletedUser;
