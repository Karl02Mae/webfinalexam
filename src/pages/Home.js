import React, { useEffect } from 'react';
import {
    Box,
    Typography,
    Button
} from '@mui/material';
import TaskContainer from '../components/TaskContainer';

import Theme from "../components/ModeSwitch"

const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        backgroundColor: (theme) => theme.palette.background.default,
    },
    themeContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '80%',
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}

export default function Home() {
    return (
        <Box sx={style.root}>
            <Box sx={style.themeContainer}>
                <Box 
                    variant="contained" 
                    sx={{alignSelf: "flex-end", }} 
                >
                    <Theme />
                </Box>
            
            </Box>
            <TaskContainer />
        </Box>
    )
}
