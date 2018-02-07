import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Task from './Task';
import List from 'material-ui/List';

const taskList = (props) => {
    const tasks = props.tasks.map((task) => {
        if (!props.showDone || task.checked) {
            return (
                <Task
                    key={task.id}
                    id={task.id}
                    taskText={task.taskText}
                    checked={task.checked}
                    handleCheck={props.handleCheck}
                    handleEdit={props.handleEdit}
                />
            )
        };
        return
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
