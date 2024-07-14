import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Link, useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';
import HeaderSignIn from "../../components/header/Header-signed-in/navbar-signin";
import Footer from "../../components/footer";
import axios from "axios";
import useUserStore from "../../store/useUserStore";
import { format } from 'date-fns';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#5b4947',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const Invoices = () => {
  const { userData, fetchUserData } = useUserStore();
  const api = import.meta.env.VITE_URL_API;
  const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchInvoiceData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          await fetchUserData(token, navigate);
        }

        if (userData && userData.id) { // Check userData before fetching data
          const response = await axios.get(
            `${api}/api/Invoice/GetByUserId?userid=${userData.id}`
          );
          setInvoiceData(response.data);
        }
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchInvoiceData();
  }, [userData, fetchUserData, navigate, api]);

  const handleDetailClick = (invoiceId) => {
    navigate(`/detail-invoice/${invoiceId}`);
  };

  return (
    <Container>
      <HeaderSignIn />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">No. Invoice</StyledTableCell>
              <StyledTableCell align="center">Course Name</StyledTableCell>
              <StyledTableCell align="center">SChedule</StyledTableCell>
              <StyledTableCell align="center">Price</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoiceData.map((cart) => (
              <TableRow key={cart.invoiceId == invoice.invoiceId}>
                <StyledTableCell align="center">{invoice.invoiceNumber}</StyledTableCell>
                <StyledTableCell align="center">{format(new Date(invoice.invoiceDate), "dd MMMM yyyy")}</StyledTableCell>
                <StyledTableCell align="center">{invoice.itemCount}</StyledTableCell>
                <StyledTableCell align="center">{invoice.totalPaid}</StyledTableCell>
                <StyledTableCell align="center">
                  <button style={{ border: 'none', backgroundColor: '#FABC1D', width: '180px', height: '37px', borderRadius: '8px' }} onClick={() => handleDetailClick(invoice.invoiceId)}>
                    Details
                  </button>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </Container>
  );
};

export default Invoices;