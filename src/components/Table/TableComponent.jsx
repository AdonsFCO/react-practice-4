import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

const TableComponent = ({ rows }) => {

  //Dummie Data for testing
  // rows = [
  //   { number: 1, cuotes: 12, capital: 19000, interest: 60, balance: 1900 },
  // ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>No</TableCell>
            <TableCell>Cuota</TableCell>
            <TableCell>Capital</TableCell>
            <TableCell>Interes</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows &&
            rows.map((row) => {
              return (
                <TableRow key={row.number}>
                  <TableCell>{row.number}</TableCell>
                  <TableCell>{row.cuotes}</TableCell>
                  <TableCell>{row.capital}</TableCell>
                  <TableCell>{row.interest}</TableCell>
                  <TableCell>{row.balance}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TableComponent;
