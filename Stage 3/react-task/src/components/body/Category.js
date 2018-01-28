import React from 'react';

import Add from 'material-ui-icons/Add';
import { MenuItem } from 'material-ui/Menu';
import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import { ListItemSecondaryAction, ListItemText } from 'material-ui/List';

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
