import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    TextField,
    Select,
    InputLabel,
    MenuItem,
} from '@mui/material';
import { db } from '../utils/firebase';

const style = {
    Add__Container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        height: '50vh',
        width: '20%',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        zIndex: '99',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '100px',
        backgroundColor: (theme) => theme.palette.boxContainer.main,
        border: 'solid 1px #f0f0f0',
        borderRadius: '15px',
        padding: '20px',
        alignItems: 'center',
        boxShadow: '10',
    },
    Add__Content: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
    },
    TextFields: {
        marginBottom: '20px',
    },
    Buttons: {
        margin: '10px',
    }
}

export default function AddTask(props) {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    const [addTask, setAddTask] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [taskCategory, setTaskCategory] = useState('Exam');

    const handleAddTask = () => {
        if (addTask === '' || taskDate === '') {
            alert('Please Fill all fields!');
        } else {
            db.collection('Tasks').add({
                Category: taskCategory,
                DateCreated: date,
                TaskDate: taskDate,
                Todo: addTask,
            })

            console.log('Upload Success!');
            setAddTask('');
            setTaskDate('');
            setTaskCategory('Exam');
        }
    }

    if (props.show === true) {
        return <Box sx={style.Add__Container}>
            <Box sx={style.Add__Content}>
                <Typography color="text.primary">ADD TASK</Typography>
                <TextField
                    label="Add new Task"
                    multiline
                    onChange={(e) => setAddTask(e.target.value)}
                    value={addTask}
                    sx={style.TextFields}
                />
                <TextField
                    label='Task Date'
                    onChange={(e) => setTaskDate(e.target.value)}
                    value={taskDate}
                    placeholder="day/month/year"
                    sx={style.TextFields}
                />
                <InputLabel id="TaskCategory">Category</InputLabel>
                <Select
                    labelId="TaskCategory"
                    value={taskCategory}
                    onChange={(e) => setTaskCategory(e.target.value)}
                    sx={style.TextFields}
                >
                    <MenuItem value={'Exam'}>Exam</MenuItem>
                    <MenuItem value={'Activity'}>Activity</MenuItem>
                    <MenuItem value={'Event'}>Event</MenuItem>
                </Select>
            </Box>

            <Box sx={style.Add__Buttons}>
                <Button sx={style.Buttons} variant="contained" onClick={handleAddTask}>Add</Button>
                <Button sx={style.Buttons} variant="contained" onClick={props.onClose}>Cancel</Button>
            </Box>
        </Box>
    } else {
        return <Box></Box>
    }
}
