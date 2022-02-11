import React from 'react';
import { AppBar, Box, Toolbar, Typography, Link } from "@mui/material";


const style = {
    container: {
        backgroundColor: "#9E5E93",
        boxShadow: '5',
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textHeader: {
        color: "#ffffff",
        fontWeight: 800,
        fontSize: { lg: "25px", xs: "20px" },
        textShadow: "2px 2px 4px #000000",
    },
    mid: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 2,
    },
    tabText: {
        color: "white",
        marginLeft: 1,
        marginRight: 1,
        fontSize: "1rem",
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
