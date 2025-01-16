import React, { useState, useEffect } from 'react';
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

const UserTransactions = () => {
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
  //       `https://apiamazingdubai.ipaisa.co.in/api/user/mytransactions?page=${page + 1}&pageSize=${rowsPerPage}`, 
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (!response.ok) {
  //       if (response.status === 403) {
  //         throw new Error('Forbidden: You do not have permission to access this resource.');
  //       } else {
  //         throw new Error('No Data Found'); 
  //       }
  //     }

  //     const data = await response.json();
  //     setTransactions(data.transactions);
  //     setTotalPages(data.pagination.totalPages);
  //     setTotalAmount(data.totalAmount);
  //     setError(null); 
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //     setError(error.message); 
  //   } finally {
  //     setLoading(false); 
  //   }
  // };

  const fetchData = async (page, rowsPerPage) => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await fetch(
        `https://apiamazingdubai.ipaisa.co.in/api/user/mytransactions?page=${page + 1}&pageSize=${rowsPerPage}`, 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('Forbidden: You do not have permission to access this resource.');
        } else {
          throw new Error('No Data Found');
        }
      }
  
      const data = await response.json();
      const sortedTransactions = data.transactions.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)); 
      setTransactions(sortedTransactions);
      setTotalPages(data.pagination.totalPages);
      setTotalAmount(data.totalAmount);
      setError(null); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message); 
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
  <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold",mt:6, }}>
    My Transactions
  </Typography>

  {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    <TableContainer
      component={Paper}
      sx={{ borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Table
        sx={{
          minWidth: 650,
          borderCollapse: "separate",
          borderSpacing: "0 10px",
          "& .MuiTableCell-root": {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
                borderRadius: "10px 0 0 10px",
              }}
            >
              Sr No
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
              }}
            >
              ID
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
              }}
            >
              Transaction Type
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
              }}
            >
              Description
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
              }}
            >
              Opening Coins
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
              }}
            >
              Amount
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
              }}
            >
              Closing Coins
            </TableCell>
            <TableCell
              align="center"
              sx={{
                color: "white",
                fontWeight: "bold",
                backgroundColor: "#027BFE",
                borderRadius: "0 10px 10px 0",
              }}
            >
              Updated At
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow
              key={transaction.id}
              sx={{
                backgroundColor: "#f9f9f9",
                "&:hover": { backgroundColor: "#f1f1f1" },
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <TableCell align="center">{transaction.srNo}</TableCell>
              <TableCell align="center">{transaction.id}</TableCell>
              <TableCell
                align="center"
                sx={{ color: "green", fontWeight: "bold" }}
              >
                {transaction.transactionType}
              </TableCell>
              <TableCell align="center">{transaction.description}</TableCell>
              <TableCell align="center">{transaction.openingInvestedCoins}</TableCell>
              <TableCell align="center">{transaction.amount}</TableCell>
              <TableCell align="center">{transaction.closingInvestedCoins}</TableCell>
              <TableCell align="center">
                {new Date(transaction.updatedAt).toLocaleString()}
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

  <Typography
    variant="h5"
    sx={{ mt: 2, fontWeight: "bold", textAlign: "right" }}
  >
    Total Amount: {totalAmount}
  </Typography>
</UserListContainer>

  );
};

export default UserTransactions;