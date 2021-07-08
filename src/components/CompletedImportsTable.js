import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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
function createData(totalImported, totalFailed, date) {
  id += 1;
  return { id, totalImported, totalFailed, date };
}

const data = [
  createData(6, 1, '12/01/20'),
  createData(5, 0, '12/01/20'),
  createData(22, 3, '12/01/20'),
];

function CompletedImportsTable(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Table size="small" className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell}>Total Imported</TableCell>
            <TableCell numeric className={classes.tableCell}>Total Failed</TableCell>
            <TableCell numeric className={classes.tableCell}>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell component="th" scope="row" className={classes.TableCell}>
                  {n.totalImported}
                </TableCell>
                <TableCell numeric className={classes.tableCell}>{n.totalFailed}</TableCell>
                <TableCell numeric className={classes.tableCell}>{n.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>

    </div>
  );
}

CompletedImportsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompletedImportsTable);