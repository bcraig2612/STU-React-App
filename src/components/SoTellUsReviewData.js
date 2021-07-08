import * as React from 'react';
import { DataGrid, RowsProp, ColDef } from '@material-ui/data-grid';
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const rows = [
  { id: 1, actions: 'Action', review: 5, status: 'Verified & Active', date: '2017-11-18', name: 'Isaac C' },
  { id: 2, actions: 'Action', review: 4.5, status: 'Pending Verification', date: '2017-11-17', name: 'Cody U' },
  { id: 3, actions: 'Action', review: 5, status: 'Pending Verification', date: '2017-10-01', name: 'Billy B.' },
  { id: 4, actions: 'Action', review: 4, status: 'Pending Verification', date: '2017-10-01', name: 'Isaac C' },
  { id: 5, actions: 'Action', review: 4, status: 'Pending Verification', date: '2017-09-01', name: 'Isaac C' },
  { id: 6, actions: 'Action', review: 5, status: 'Pending Verification', date: '2017-08-01', name: 'Isaac C' },
  { id: 7, actions: 'Action', review: 4, status: 'Pending Verification', date: '2017-05-01', name: 'Isaac C' },
  { id: 8, actions: 'Action', review: 4.5, status: 'Pending Verification', date: '2017-04-01', name: 'Isaac C' },
];

const columns = [
  {
    field: 'actions',
    sortable: false,
    headerName: 'Actions',
    renderCell: (params) => (
    <Button size="small" variant="contained" color="default" disableElevation>
      <ArrowDropDownIcon />
    </Button>
    ),
    width: 100,
    filterable: false
  },
  {
    field: 'review',
    headerName: 'Review',
    renderCell: (params) => (
      <Rating name="read-only" value={params.value} precision={0.5} readOnly />
    ),
    width: 150
  },
  { field: 'status', headerName: 'Status', width: 200 },
  { field: 'name', headerName: 'Name', width: 150 },
  { field: 'date', headerName: 'Date', width: 150 },
];

export default function SoTellUsReviewData() {

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid pagination rows={rows} columns={columns} />
    </div>
  );
}