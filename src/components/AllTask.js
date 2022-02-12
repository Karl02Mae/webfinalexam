import React from 'react';
import {
    Box,
    Typography,
    Button,
    Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
} from '@mui/material';
import { db } from '../utils/firebase';

const style = {
    AllTaskCont: {
        display: 'flex',
        marginLeft: '30px',
        marginBottom: '20px',
        marginRight: '30px',
        justifyContent: 'space-between',
    },
    todo: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        marginLeft: {lg: 5, xs: "none"}
      },
}

export default function AllTask(props) {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete?')) {
            db.collection('Tasks').doc(props.id).delete().then(() => {
                console.log('Announcement Successfully Deleted')
                alert('Deleted Successfully!');
            }).catch((error) => {
                console.error('Error Removing Announcement', error)
            })
        } else {
            console.log('Not Deleted!')
        }
    }

    if (props.show === true) {
        return (
            <TableContainer sx={{ display: "flex", width: { lg: "95%", xs: "96%" } }}>
            <Table sx={{ tableLayout: "fixed" }}>
              <TableBody>
                <TableRow
                  sx={{
                    cursor: "pointer",
                    "th,td": { border: 0 },
                    "td:first-of-type": {
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                    },
                    "td:last-of-type": {
                      borderTopRightRadius: "10px",
                      borderBottomRightRadius: "10px",
                    },
                  }}
                >
                  <TableCell align="left" scope="row">
                    <Typography sx={style.todo} >{props.Todo}</Typography>
                  </TableCell>
    
                  <TableCell align="center">
                    <Typography sx={style.todo}>{props.Category}</Typography>
                  </TableCell>
                  <TableCell align="center"><Typography sx={style.todo}>{props.Date}</Typography></TableCell>
                  <TableCell align="right">
                  <Button variant="contained" sx={{width: { lg: 100, xs: 45}, height: {lg: 40, xs: 25}}} onClick={handleDelete}>Delete</Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )
    } else if (props.show === false) {
        return (
            <Box></Box>
        )
    }
}
