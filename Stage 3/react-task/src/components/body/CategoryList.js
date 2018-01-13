import React from 'react';
import Paper from 'material-ui/Paper';

import { MenuList, MenuItem } from 'material-ui/Menu';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import FolderIcon from 'material-ui-icons/Folder';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';

const categoryList = (props) => {
    return (
        <div className="categoryList">
            <Paper elevation={2}>
                <MenuList>
                    <MenuItem >
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Category 1" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText inset primary="Category 2" />
                    </MenuItem>
                    <MenuItem onClick={props.open}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText  inset primary="Category 3" />
                        {props.state.open ? <ExpandLess /> : <ExpandMore />}
                    </MenuItem>
                    <Collapse component="li" in={props.state.open} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            <ListItem button>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Category 3 1" />
                            </ListItem>
                        </List>
                    </Collapse>
                    <MenuItem onClick={props.open}>
                        <ListItemIcon>
                            <FolderIcon />
                        </ListItemIcon>
                        <ListItemText  inset primary="Category 4" />
                        {props.state.open ? <ExpandLess /> : <ExpandMore />}
                    </MenuItem>
                    <Collapse component="li" in={props.state.open} timeout="auto" unmountOnExit>
                        <List disablePadding>
                            <ListItem button>
                                <ListItemIcon>
                                    <FolderIcon />
                                </ListItemIcon>
                                <ListItemText inset primary="Category 4 1" />
                            </ListItem>
                        </List>
                    </Collapse>
                </MenuList>
            </Paper>
        </div>
    )
};

export default categoryList;
