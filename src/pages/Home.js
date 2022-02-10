import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import TaskContainer from '../components/TaskContainer';


const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: '#f0f0f0',
    }
}

export default function Home() {
    return (
        <Box sx={style.root}>
            <TaskContainer />
        </Box>
    )
}
