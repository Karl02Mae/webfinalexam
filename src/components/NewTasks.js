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
