import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Task from './Task';
import List from 'material-ui/List';

const taskList = (props) => {
    const tasks = props.tasks.map((task) => {
        let taskDone = (props.doneTasks.indexOf(task.id) !== -1);
        if (!props.showDone) {
            return (
                <Task
                    key={task.id}
                    id={task.id}
                    taskText={task.taskText}
                    checked={taskDone}
                    handleCheck={props.handleCheck}
                    handleEdit={props.handleEdit}
                />
            )
        } else if (taskDone) {
            return (
                <Task
                    key={task.id}
                    id={task.id}
                    taskText={task.taskText}
                    checked={taskDone}
                    handleCheck={props.handleCheck}
                    handleEdit={props.handleEdit}
                />
            )
        };
    });

    if (props.tasks.length === 0) {
        return <br/>;
    } else{
        return (
            <Grid item xs={12} sm={9}>
                <div className="Body-taskList">
                    <Paper>
                        <List> { tasks } </List>
                    </Paper>
                </div>
            </Grid>
        )
    }
};

export default taskList;
