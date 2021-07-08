import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, username, role) {
  return { name, username, role };
}

const rows = [
  createData('Cody Uptain', 'Billy', 'Admin'),
  createData('Ice cream sandwich', 'Jane Doe', 'Admin'),
  createData('Eclair', 'John Johnson', 'User'),
];

export default function UsersTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Role</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}