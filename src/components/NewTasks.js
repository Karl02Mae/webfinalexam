import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';

const style = {
    NewTaskCont: {
        display: 'flex',
        marginLeft: '30px',
        marginBottom: '20px',
        marginRight: '30px',
        justifyContent: 'space-between',
    },
    Todo: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" }
    },
    Category: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" }
    },
    Date: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" }
    },
}

export default function NewTasks(props) {

    if (props.show === true) {
        return (
            <Box sx={style.NewTaskCont}>
                <Typography sx={style.Todo}>{props.Todo}</Typography>
                <Typography sx={style.Category}>{props.Category}</Typography>
                <Typography sx={style.Date}>{props.Date}</Typography>
            </Box>
        )
    } else if (props.show === false) {
        return (
            <Box></Box>
        )
    }
}
