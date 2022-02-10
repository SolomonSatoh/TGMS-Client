

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Grid,
    Typography,
    TablePagination,
    TableFooter,
    Button
 } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
      // minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        // margin: '20px',
        // marginLeft: '400px',
        // maxWidth: 
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.success.light,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
   
    district: {
        
        color: 'primary'
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: theme.palette.success.light,
        borderRadius: 8,
        padding: '10px 15px',
        display: 'inline-block'
    }
  }));

  

let USERS = [];
for(let i=0;i<5;i++) {
    USERS[i] = {
        district: 'Mzimba',
        tollName: "Champhira",
        roadSection: 'Mzimba-Jenda',
        status: 'BooK Toll'
    }
}

function TollList() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>District</TableCell>
            <TableCell className={classes.tableHeaderCell}>Toll Name</TableCell>
            <TableCell className={classes.tableHeaderCell}>Road Section</TableCell>
            <TableCell className={classes.tableHeaderCell}>Book Toll</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                  <Grid container>
                      <Grid item lg={10}>
                          <Typography className={classes.district}>{row.district}</Typography>
                      </Grid>
                  </Grid>
                </TableCell>
              <TableCell >
                  <Typography  variant="subtitle2">{row.tollName}</Typography>
              </TableCell>
               <TableCell>{row.roadSection}</TableCell>
              <Button>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((row.status === 'Active' && 'green') ||
                        (row.status === 'Pending' && 'blue') ||
                        (row.status === 'Blocked' && 'orange'))
                    }}
                  >{row.status}</Typography>
                </Button>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default TollList;