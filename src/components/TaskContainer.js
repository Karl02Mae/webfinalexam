import React from 'react';
import {
    Box,
    Typography,
    Button,
    Divider,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '90vh',
        width: '80%',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'white',
        border: '1px solid #f1f1f1',
        boxShadow: '5',
        borderRadius: '5px',
    },

    TaskHeader__AddTask: {
        margin: '10px',
        marginLeft: '20px',
        padding: '5px',
        height: '30px',
        width: '100px',
    },

    NewTask: {
        display: 'flex',
        alignItems: 'center',
        
    }
}

export default function TaskContainer() {
    return (
        <Box sx={style.root}>
            <Box sx={style.TaskHeader}>
                <Button
                    sx={style.TaskHeader__AddTask}
                    variant='contained'
                >Add Task</Button>
            </Box>
            <Divider />
            <Box sx={style.NewTask}>
                <Typography sx={style.NewTask__Text}><ArrowDropUpIcon />New Tasks</Typography>
            </Box>
        </Box>
    )
}
