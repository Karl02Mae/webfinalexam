import React, { useEffect } from 'react';
import {
    Box,
    Typography,
    Button
} from '@mui/material';
import TaskContainer from '../components/TaskContainer';

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme,  getTheme } from "../redux/actions/uiAction";

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
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}

export default function Home() {
    const dispatch = useDispatch();
    const ui = useSelector((state) => state.ui);
    useEffect(() => {
        dispatch(getTheme());
    }, [dispatch]);

    const _toggletheme = () => {
        dispatch(toggleTheme(!ui.isDarkMode));
    };
    return (
        <Box sx={style.root}>
            <Box sx={style.themeContainer}>
                <Button 
                variant="contained" 
                color="primary" 
                sx={{alignSelf: "flex-end", color: (theme) => theme.palette.secondary.main, }} 
                onClick={_toggletheme}
            >
                <Typography sx={{color: "white"}}>{ui.isDarkMode ? "Light Theme" : "Dark Theme"}</Typography>
            </Button>
            </Box>
            <TaskContainer />
        </Box>
    )
}
