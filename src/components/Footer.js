import React from 'react';
import {
    Box,
    Typography,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';


const style = {
    root: {
        alignItems: "center",
        backgroundColor: (theme) => theme.palette.background.default,
    },
    row: {
        flexDirection: "row",
        flexWrap: "wrap",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    column: {
        display: 'flex',
        flexDirection: "column",
        textAlign: "center",
        padding: { lg: 7, xs: 3 },
        justifyContent: 'center',
    },
    text1: {
        color: (theme) => theme.palette.secondary.main,
        fontWeight: 800,
        fontSize: { lg: "20px", xs: "15px" },
        margin: 2,
    },
    text2: {
        color: 'text.primary',
        fontSize: { lg: "15px", xs: "10px" },

    },
    contactContainer: {
        flexDirection: "column",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    contactText: {
        color: (theme) => theme.palette.secondary.main,
        fontWeight: 800,
        fontSize: "20px",
        margin: 2,
    },
    iconContainer: {
        flexDirection: "row",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icons: {
        marginRight: "20px",
        marginLeft: "20px",
        color: 'text.primary',
        size: "15px"
    },
    formControl: {
        width: 200,
        border: "none",
    }
}

export default function Footer() {

    return (
        <Box sx={style.root}>
            <Box sx={style.row}>

                <Box sx={style.column}>
                    <Typography sx={style.text1}>About</Typography>
                    <Typography sx={style.text2}>Blog</Typography>
                    <Typography sx={style.text2}>Privacy</Typography>
                    <Typography sx={style.text2}>Terms and Policy</Typography>
                    <Typography sx={style.text2}>Ads</Typography>
                    <Typography sx={style.text2}>Careers</Typography>
                </Box>
                <Box sx={style.column}>
                    <Typography sx={style.text1}>Members</Typography>
                    <Typography sx={style.text2}>Karl Christopher Samelo</Typography>
                    <Typography sx={style.text2}>Sara Ramos</Typography>
                    <Typography sx={style.text2}>Junnie M. Adriano</Typography>
                    <Typography sx={style.text2}>Russel May Limas</Typography>
                    <Typography sx={style.text2}>Arriane Barredo</Typography>
                </Box>
                <Box sx={style.column}>
                    <Typography sx={style.text1}>Group 6</Typography>
                    <Typography sx={style.text2}>Todo List App</Typography>

                </Box>
            </Box>
            <Box sx={style.contactContainer}>
                <Typography sx={style.contactText}>Contact Us</Typography>
                <Box sx={style.iconContainer}>
                    <FacebookIcon sx={style.icons} />
                    <GoogleIcon sx={style.icons} />
                    <TwitterIcon sx={style.icons} />
                </Box>
            </Box>
        </Box>
    )
}