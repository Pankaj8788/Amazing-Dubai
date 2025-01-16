import React, { useState, useEffect } from "react";
import { styled } from "@mui/system";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const UserListContainer = styled(Box)({
  padding: "16px",
  marginTop: "20px",
});

const AdminReport = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // const fetchData = async (page, rowsPerPage) => {
  //   try {
  //     const token = localStorage.getItem("authToken");
  //     const response = await fetch(
  //       `https://apiamazingdubai.ipaisa.co.in/api/admin/alltransactions?page=${page + 1}&pageSize=${rowsPerPage}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }

  //     const data = await response.json();
  //     setTransactions(data.transactions);
  //     setTotalPages(data.pagination.totalPages);
  //     setTotalAmount(data.totalAmount);
  //     setError(null);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //     setError("Failed to fetch transactions.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchData = async (page, rowsPerPage) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `https://apiamazingdubai.ipaisa.co.in/api/admin/alltransactions?page=${page + 1}&pageSize=${rowsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      const sortedTransactions = data.transactions.sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setTransactions(sortedTransactions);
      setTotalPages(data.pagination.totalPages);
      setTotalAmount(data.totalAmount);
      setError(null);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch transactions.");
    } finally {
      setLoading(false);
    }
  };
  

  useEffect(() => {
    fetchData(page, rowsPerPage);
  }, [page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <UserListContainer>
      <Typography sx={{ mt: 6 }} variant="h5">
        Transaction Report
      </Typography>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <TableContainer
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
            <TableHead style={{ backgroundColor: "#027BFE", color: "white" }}>
              <TableRow>
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
                  Transaction Type
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Description
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  User ID
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Opening Coins
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Amount
                </TableCell>
                <TableCell
                  sx={{
                    color: "#FFFFFF",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Closing Coins
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
                  User Name
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
              </TableRow>
            </TableHead>
            <TableBody>
              {transactions.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell
                    sx={{ color: "#FFD700" }}
                    component="th"
                    scope="row"
                  >
                    {transaction.id}
                  </TableCell>
                  <TableCell
                    style={{ color: "red", fontWeight: "bold" }}
                    align="center"
                  >
                    {transaction.transactionType}
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#FFD700" }}>
                    {transaction.description}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {transaction.userId}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {transaction.openingInvestedCoins}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {transaction.amount}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {transaction.closingInvestedCoins}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {new Date(transaction.createdAt).toLocaleString()}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {transaction.User.firstname}
                  </TableCell>
                  <TableCell sx={{ color: "#FFD700" }} align="center">
                    {transaction.User.mobileno}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={totalPages * rowsPerPage}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Typography variant="h5">Total Amount: {totalAmount}</Typography>
    </UserListContainer>
  );
};

export default AdminReport;
