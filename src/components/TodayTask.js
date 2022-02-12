import React from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
} from "@mui/material";

const style = {
  TodayTaskCont: {
    display: "flex",
    marginLeft: "30px",
    marginBottom: "20px",
    marginRight: "30px",
    justifyContent: "space-between",
  },
  todo: {
    fontSize: { lg: "1.2rem", xs: "0.7rem" },
    marginLeft: {lg: 5, xs: "none"}
  },
  
};

export default function TodayTask(props) {
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
              <TableCell align="right"><Typography sx={style.todo}>{props.Date}</Typography></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else if (props.show === false) {
    return <Box></Box>;
  }
}
