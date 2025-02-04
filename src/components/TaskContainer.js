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
import TodayTask from './TodayTask';
import AddTask from './AddTask';
import AllTask from './AllTask';


const style = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '60vh',
        maxHeight: 'fit-content',
        width: { lg: "80%", xs: "95%" },
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: (theme) => theme.palette.boxContainer.main,
        boxShadow: '5',
        borderRadius: '5px',
    },

    TaskHeader__AddTask: {
        margin: '15px',
        marginLeft: '20px',
        padding: '5px',
        height: {lg:'30px', xs: "25px"},
        width: {lg: '100px', xs: "95"}
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
            backgroundColor: {lg: '#f0f0f0', xs: "none"}
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
        fontSize: { lg: "1.2rem", xs: "0.8rem" }
    },

    TodayTask__Text: {
        fontWeight: '700',
        cursor: 'pointer',
        fontSize: { lg: "1.2rem", xs: "0.8rem" }
    },

    UpcomingTask__Text: {
        fontWeight: '700',
        cursor: 'pointer',
        fontSize: { lg: "1.2rem", xs: "0.8rem" }
    },

    Header: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: {lg: '50px', xs: "20px"},
        marginRight: {lg: '80px', xs: "35px"}
    },

    HeaderText: {
        fontWeight: { lg: '700', xs: "none" },
        fontSize: { lg: "1rem", xs: "0.7rem" },
    }
}

export default function TaskContainer() {

    const [NTask, setNTask] = useState([]);
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [show, setShow] = useState(false);

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
    const [ATC, setATC] = useState(false);

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

    const handleClickATC = () => {
        if (ATC === false) {
            setATC(true);
        } else if (ATC === true) {
            setATC(false);
        }
    }

    return (
        <Box sx={style.root}>
            <Box sx={style.TaskHeader}>
                <Button
                    sx={style.TaskHeader__AddTask}
                    variant='contained'
                    color="secondary"
                    onClick={() => setShow(true)}
                ><Typography sx={{ fontSize: {lg: "1rem", xs: "0.9rem"}, color: "white" }}> Add Task </Typography></Button>
            </Box>
            <AddTask show={show} onClose={() => setShow(false)} />
            <Divider />
            <Box sx={style.Header}>
                <Typography color="text.primary" sx={style.HeaderText}>Task</Typography>
                <Typography color="text.primary" sx={style.HeaderText}>Category</Typography>
                <Typography color="text.primary" sx={style.HeaderText}>Date</Typography>
            </Box>
            <Divider />
            <Box color="text.primary" sx={style.NewTask}>
                {NTC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography color="text.primary" sx={style.NewTask__Text} onClick={handleClickNTC}>New Tasks</Typography>
            </Box>
            <Box color="text.primary" sx={style.NewTask__List}>
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
            <Box color="text.primary" sx={style.TodayTask}>
                {TTC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography color="text.primary" sx={style.TodayTask__Text} onClick={handleClickTTC}>Today</Typography>
            </Box>
            <Box color="text.primary" sx={style.TodayTask__List}>
                {
                    NTask.map(({ id, data }) => {
                        if (data.TaskDate === date) {
                            return <TodayTask
                                show={TTC}
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
            <Box color="text.primary" sx={style.UpcomingTask}>
                {UTC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography color="text.primary" sx={style.UpcomingTask__Text} onClick={handleClickUTC}>Upcoming</Typography>
            </Box>
            <Box color="text.primary" sx={style.TodayTask__List}>
                {
                    NTask.map(({ id, data }) => {
                        if (data.TaskDate > date) {
                            return <TodayTask
                                show={UTC}
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
            <Box color="text.primary" sx={style.UpcomingTask}>
                {ATC === false ? (
                    <ArrowDropUpIcon />
                ) : (
                    <ArrowDropDownIcon />
                )}
                <Typography color="text.primary" sx={style.UpcomingTask__Text} onClick={handleClickATC}>All Tasks</Typography>
            </Box>
            <Box color="text.primary" sx={style.AllTask__List}>
                {
                    NTask.map(({ id, data }) => {
                        return <AllTask
                            show={ATC}
                            key={id}
                            id={id}
                            Todo={data.Todo}
                            Date={data.TaskDate}
                            Category={data.Category}
                        />
                    })
                }

            </Box>
        </Box>
    )
}
