import React from 'react';

import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItemSecondaryAction, ListItem,  ListItemText } from 'material-ui/List';

const subCategory = props => <Collapse
        key={props.id}
        in={props.opened}
        timeout="auto"
        unmountOnExit
    >
        <List disablePadding>
            <ListItem>
                <ListItemText inset primary={props.subCategoryText} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={() => props.handleRemoveSub(props.category_id,props.id)}
                    >
                        <Delete />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </List>
</Collapse>

export default subCategory;
