/* tslint:disable */
import React, { Dispatch, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { default as DefaultTable } from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { AppState } from '../reducers';
import { useDispatch, useSelector } from 'react-redux';
import { AllActions, ITableData, getDataAction, fetchPosts } from '../actions';
import { AppDispatch, RootState } from '../index';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
}));

const Table = () => {
  const classes = useStyles();
  // const tableData = useSelector((state: IState) => state.tableData); // works
  const tableData = useSelector((state: RootState) => state.tableData);
  const nameDispatch: AppDispatch = useDispatch();
  // const nameDispatch: AppDispatch = useDispatch<Dispatch<AllActions>>();

  useEffect(() => {
    // nameDispatch({ type: 'GET_DATA', payload : {}});
    // nameDispatch({ type: 'GET_DATA', payload: fetchPosts() });
    // nameDispatch(getDataAction);
  }, []);

  return (
    <Grid item lg={12} md={12} sm={12} xs={12}>
      <TableContainer component={Paper}>
        <DefaultTable className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData && tableData.map((row: ITableData) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </DefaultTable>
      </TableContainer>
    </Grid>
  );
}

export default Table;

export interface ICounterProps {
  counter: number,
  increment: () => void,
  decrement: () => void,
  reset: () => void
}

interface IState {
  tableData: ITableData[];
}