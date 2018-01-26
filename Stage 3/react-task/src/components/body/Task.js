import React from 'react';

import { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';

const task = (props) => {

    return (
        <ListItem key={props.orderNumber} button onClick={props.handleCheck}>
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
