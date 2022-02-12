import React from 'react';
import {
    Box,
    Typography
} from '@mui/material';

const style = {
    TodayTaskCont: {
        display: 'flex',
        marginLeft: '30px',
        marginBottom: '20px',
        marginRight: '30px',
        justifyContent: 'space-between',
    },
    Todo: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        fontFamily: "NgutangDong",
        fontWeight: 500,
    },
    Category: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        fontFamily: "NgutangDong",
        fontWeight: 500,
    },
    Date: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        fontFamily: "NgutangDong",
        fontWeight: 500,
    },
}

export default function TodayTask(props) {
    if (props.show === true) {
        return (
            <Box sx={style.TodayTaskCont}>
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
