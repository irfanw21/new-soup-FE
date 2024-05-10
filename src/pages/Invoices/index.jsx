import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#5b4947',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    // Mocked data
    const data = [
      { id: '1', noInvoice: 'SOU00003', date: '12 July 2022', totalcourse: 1, totalprice: 'IDR 450.000' },
      { id: '2', noInvoice: 'SOU00002', date: '05 February 2022', totalcourse: 2, totalprice: 'IDR 900.000' },
      { id: '3', noInvoice: 'SOU00001', date: '30 August 2021', totalcourse: 1, totalprice: 'IDR 600.000' },
    ];

    setInvoices(data);
  }, []);

  return (
    <Container>
      <HeaderSignIn />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell align="center">No. Invoice</StyledTableCell>
              <StyledTableCell align="center">Date</StyledTableCell>
              <StyledTableCell align="center">Total Course</StyledTableCell>
              <StyledTableCell align="center">Total Price</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((row, index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="center">{row.noInvoice}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.totalcourse}</StyledTableCell>
                <StyledTableCell align="center">{row.totalprice}</StyledTableCell>
                <StyledTableCell align="center">
                  <button style={{ border: 'none', backgroundColor: '#FABC1D', width: '180px', height: '37px', borderRadius: '8px' }}>
                    Details
                  </button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </Container>
  );
};

export default Invoices;
