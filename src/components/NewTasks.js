import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';


export default function NewTasks(props) {

    if (props.show === true) {
        return (
            <Box>
                <Typography>Todo: {props.Todo}</Typography>
            </Box>
        )
    } else if (props.show === false) {
        return (
            <Box></Box>
        )
    }
}
