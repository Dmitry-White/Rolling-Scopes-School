import React from 'react';
import Paper from 'material-ui/Paper';

import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';

const taskList = (props) => {

    return (
        <div className="taskList">
            <Paper elevation={2}>
                <List >
                    <ListItem key={1} button onClick={props.toggle(1)}>
                        <Checkbox checked={props.state.checked.indexOf(1) !== -1} />
                        <ListItemText primary="Task 1" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem key={2} button onClick={props.toggle(2)}>
                        <Checkbox checked={props.state.checked.indexOf(2) !== -1}/>
                        <ListItemText primary="Task 2" />
                        <ListItemSecondaryAction>
                            <IconButton aria-label="Delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Paper>
        </div>
    )
};

export default taskList;
