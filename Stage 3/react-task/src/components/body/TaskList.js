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
                            clickHandler={props.toggle(1)}
                            checkHandler={props.state.checked.indexOf(1) !== -1}
                            taskText={"Task 1"}
                        />
                        <Task
                            orderNumber={2}
                            clickHandler={props.toggle(2)}
                            checkHandler={props.state.checked.indexOf(2) !== -1}
                            taskText={"Task 2"}
                        />

                    </List>
                </Paper>
            </div>
        </Grid>
    )
};

export default taskList;
