import React from 'react';
import {
    Box,
} from '@mui/material';
import TaskContainer from '../components/TaskContainer';

import Theme from "../components/ModeSwitch"
import { HelmetProvider, Helmet } from 'react-helmet-async';

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
        <HelmetProvider>
            <Box sx={style.root}>
                <Helmet>
                    <title>Todo List - Group 6</title>
                    <link rel='canonical' href='https://todolistgroup6.netlify.app/' />
                    <meta
                        name="description"
                        content="Welcome to Todo List!. You are currently viewing the home page of Todo List! "
                        data-react-helmet="true"
                    />
                    <meta
                        property="og:description"
                        content="Welcome to Todo List!. You are currently viewing the home page of Todo List! "
                        data-react-helmet="true"
                    />
                    <meta
                        name="keywords"
                        content="TodoList, todo list, todolist, TODOLIST, Group6"
                        data-react-helmet="true"
                    />
                    <meta
                        property="og:title"
                        content="Todo List - Group 6"
                        data-react-helmet="true"
                    />
                </Helmet>
                <Box sx={style.themeContainer}>
                    <Box
                        variant="contained"
                        sx={{ alignSelf: "flex-end", }}
                    >
                        <Theme />
                    </Box>

                </Box>
                <TaskContainer />
            </Box>
        </HelmetProvider>
    )
}
