import React from 'react';
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";


const style = {
    container: {
        backgroundColor: "#9E5E93",
        boxShadow: '5',
        padding: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textHeader: {
        color: "white",
        fontSize: "1.5rem",
    },
    mid: {
        display: "flex",
        flexDirection: "row",
    },
    tabText: {
        color: "white",
        margin: 2,
        fontSize: "1rem"
    }
}

export default function Header() {
    return (
        <AppBar position="static" >
            <Toolbar sx={style.container}>
                <Box sx={style.left}>
                    <Typography sx={style.textHeader}> Todo List Group 6 </Typography>
                </Box>
                <Box sx={style.mid} >
                    <Link href="/" underline="none">
                        <Typography sx={style.tabText}>List</Typography>
                    </Link>
                    <Link href="/" underline="none">
                        <Typography sx={style.tabText}>Calendar</Typography>
                    </Link>
                    <Link href="/" underline="none">
                        <Typography sx={style.tabText}>Files</Typography>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    )
}
