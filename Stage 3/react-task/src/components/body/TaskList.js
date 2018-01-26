import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import List from 'material-ui/List';
import Task from './Task';

const taskList = (props) => {

    return (
        <Grid item xs={12} sm={9}>
            <div className="Body-taskList">
                <Paper elevation={2}>
                    <List >
                        <Task
                            orderNumber={1}
                            checked={props.checked.indexOf(1) !== -1}
                            handleCheck={props.handleCheck(1)}
                            handleEdit={props.handleEdit}
                            taskText={"Task 1"}
                        />
                        <Task
                            orderNumber={2}
                            checked={props.checked.indexOf(2) !== -1}
                            handleCheck={props.handleCheck(2)}
                            handleEdit={props.handleEdit}
                            taskText={"Task 2"}
                        />

                    </List>
                </Paper>
            </div>
        </Grid>
    )
};

export default taskList;
