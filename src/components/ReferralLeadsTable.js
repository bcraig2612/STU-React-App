import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, referredBy, fat, carbs) {
  return { name, referredBy, fat, carbs };
}

const rows = [
  createData('Cody Uptain', 'Billy', 6.0, 24, 4.0),
  createData('Ice cream sandwich', 'Jane Doe', 9.0, 37, 4.3),
  createData('Eclair', 'John Johnson', 16.0, 24, 6.0),
  createData('Cupcake', 'Sam Willis', 3.7, 67, 4.3),
  createData('Gingerbread', 'Gary Rockford', 16.0, 49, 3.9),
];

export default function ReferralLeadsTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Lead</TableCell>
            <TableCell align="right">Referred by</TableCell>
            <TableCell align="right">Created on</TableCell>
            <TableCell align="right">Response</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.referredBy}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}