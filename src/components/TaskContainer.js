import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Divider,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { db } from '../utils/firebase';

import NewTasks from './NewTasks';


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
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '10px',
        paddingRight: '10px',
        width: 'fit-content',
        "&:hover": {
            backgroundColor: '#f0f0f0',
        }
    },

    TodayTask: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '10px',
        paddingRight: '10px',
        width: 'fit-content',
        "&:hover": {
            backgroundColor: '#f0f0f0',
        }
    },

    UpcomingTask: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '15px',
        marginBottom: '15px',
        marginLeft: '10px',
        paddingRight: '10px',
        width: 'fit-content',
        "&:hover": {
            backgroundColor: '#f0f0f0',
        }
    },

    NewTask__Text: {
        fontWeight: '700',
        cursor: 'pointer',
    },

    TodayTask__Text: {
        fontWeight: '700',
        cursor: 'pointer',
    },

    UpcomingTask__Text: {
        fontWeight: '700',
        cursor: 'pointer',
    },
}

export default function TaskContainer() {

    const [NTask, setNTask] = useState([]);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    useEffect(() => {
        db.collection('Tasks').orderBy('DateCreated', 'desc').onSnapshot(snapshot => {
            setNTask(snapshot.docs.map(doc => ({
                data: doc.data(),
                id: doc.id
            })))
        })
    }, []);

    const [NTC, setNTC] = useState(false);
    const [TTC, setTTC] = useState(false);
    const [UTC, setUTC] = useState(false);

    const handleClickNTC = () => {
        if (NTC === false) {
            setNTC(true);
        } else if (NTC === true) {
            setNTC(false);
        }
    }

    const handleClickTTC = () => {
        if (TTC === false) {
            setTTC(true);
        } else if (TTC === true) {
            setTTC(false);
        }
    }

    const handleClickUTC = () => {
        if (UTC === false) {
            setUTC(true);
        } else if (UTC === true) {
            setUTC(false);
        }
    }

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
                {NTC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography sx={style.NewTask__Text} onClick={handleClickNTC}>New Tasks</Typography>
            </Box>
            <Box sx={style.NewTask__List}>
                {
                    NTask.map(({ id, data }) => {
                        if (data.DateCreated === date) {
                            return <NewTasks
                                show={NTC}
                                key={id}
                                id={id}
                                Todo={data.Todo}
                                Date={data.TaskDate}
                                Category={data.Category}
                            />
                        } else {
                            return <div key={id}></div>
                        }
                    })
                }

            </Box>
            <Divider />
            <Box sx={style.TodayTask}>
                {TTC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography sx={style.TodayTask__Text} onClick={handleClickTTC}>Today</Typography>
            </Box>
            <Divider />
            <Box sx={style.UpcomingTask}>
                {UTC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography sx={style.UpcomingTask__Text} onClick={handleClickUTC}>Upcoming</Typography>
            </Box>
        </Box>
    )
}
