import React from 'react';
import {
    Box,
    Typography,
    Button,
} from '@mui/material';
import { db } from '../utils/firebase';

const style = {
    AllTaskCont: {
        display: 'flex',
        marginLeft: '30px',
        marginBottom: '20px',
        marginRight: '30px',
        justifyContent: 'space-between',
    },
    Todo: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        fontWeight: 500,
    },
    Category: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        fontWeight: 500,
    },
    Date: {
        fontSize: { lg: "1.2rem", xs: "0.7rem" },
        fontWeight: 500,
    },
}

export default function AllTask(props) {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want to delete?')) {
            db.collection('Tasks').doc(props.id).delete().then(() => {
                console.log('Announcement Successfully Deleted')
                alert('Deleted Successfully!');
            }).catch((error) => {
                console.error('Error Removing Announcement', error)
            })
        } else {
            console.log('Not Deleted!')
        }
    }

    if (props.show === true) {
        return (
            <Box sx={style.AllTaskCont}>
                <Typography sx={style.Todo}>{props.Todo}</Typography>
                <Typography sx={style.Category}>{props.Category}</Typography>
                <Typography sx={style.Date}>{props.Date}</Typography>
                <Button variant="contained" onClick={handleDelete}>Delete</Button>
            </Box>
        )
    } else if (props.show === false) {
        return (
            <Box></Box>
        )
    }
}
