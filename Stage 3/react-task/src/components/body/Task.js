import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import EditIcon from 'material-ui-icons/Edit';
import IconButton from 'material-ui/IconButton';
import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

const task = (props) => {

    return (
        <ListItem key={props.id} button onClick={() => props.handleCheck(props.id)}>
            <Checkbox checked={props.checked} />
            <ListItemText primary={props.taskText} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit">
                    <EditIcon onClick={props.handleEdit}/>
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    )
};

export default task;
