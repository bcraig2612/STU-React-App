import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";

const styles = theme => ({
  root: {
    display: 'flex',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'hide',
  },
  table: {
    minWidth: 340,
  },
  tableCell: {
    paddingRight: 4,
    paddingLeft: 5
  },
  hideMobile: {
    [theme.breakpoints.down('sm')]: {
      display: "none"
    },
  },
});

let id = 0;
function createData(name, phoneNumber, email, offer, date) {
  id += 1;
  return { id, name, phoneNumber, email, offer, date };
}

const data = [
  createData('Cody Uptain', "828-490-3763", "codyuptain27@gmail.com", "Sent Invitation", '12/01/20'),
  createData('Cody Uptain', "828-490-3763", "codyuptain27@gmail.com", "Sent Invitation", '12/01/20'),
  createData('Cody Uptain', "828-490-3763", "codyuptain27@gmail.com", "Sent Invitation", '12/01/20'),
  createData('Cody Uptain', "828-490-3763", "codyuptain27@gmail.com", "Sent Invitation", '12/01/20'),
  createData('Cody Uptain', "828-490-3763", "codyuptain27@gmail.com", "Sent Invitation", '12/01/20'),
];

function PendingScheduledInvitesTable(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Name</TableCell>
            <TableCell numeric className={classes.tableCell}>Phone</TableCell>
            <TableCell numeric className={classes.tableCell}>Email</TableCell>
            <TableCell numeric className={classes.tableCell + ' ' + classes.hideMobile}>Status</TableCell>
            <TableCell numeric className={classes.tableCell + ' ' + classes.hideMobile}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row" className={classes.TableCell}>
                  {n.name}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>{n.phoneNumber}</TableCell>
                <TableCell numeric className={classes.tableCell}>{n.email}</TableCell>
                <TableCell numeric className={classes.tableCell + ' ' + classes.hideMobile}>{n.offer}</TableCell>
                <TableCell numeric className={classes.tableCell + ' ' + classes.hideMobile}>{n.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

    </div>
  );
}

PendingScheduledInvitesTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PendingScheduledInvitesTable);