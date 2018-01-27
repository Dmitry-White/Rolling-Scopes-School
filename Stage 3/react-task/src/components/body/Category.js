import React from 'react';

import { ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import Add from 'material-ui-icons/Add';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const category = (props) => {
    if (props.hasSubs) {
        let expand = props.state.open ? <ExpandLess onClick={props.openSubs}/>
                                      : <ExpandMore onClick={props.openSubs}/>
    };

    return (
        <MenuItem >
            { this.expand }
            <ListItemText inset primary={props.categoryText} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => props.handleRemoveCategory(props.id)}>
                    <Delete />
                </IconButton>
                <IconButton aria-label="Add" onClick={() => props.handleAddSub(props.id)}>
                    <Add />
                </IconButton>
            </ListItemSecondaryAction>
        </MenuItem>
    )
};

export default category;
