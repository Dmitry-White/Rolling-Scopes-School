import React from 'react';
import Paper from 'material-ui/Paper';

import { MenuList, MenuItem } from 'material-ui/Menu';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Category from './Category';

const categoryList = (props) => {

    const categories = props.categories.map((category) => {
        return (
            <Category
                state={props.state}
                key={category.id}
                id={category.id}
                categoryText={category.categoryText}
                openSubs={props.openSubs}
                hasSubs={category.hasSubs}
                handleRemoveCategory={props.handleRemoveCategory}
                handleAddSub={props.handleAddSub}
            />
        )
    });

    if (props.categories.length === 0) {
        return <br/>;
    } else{
        return (
            <Grid item xs={12} sm={3}>
                <div className="Body-categoryList">
                    <Paper elevation={2}>
                        <MenuList>
                            { categories }
                            <MenuItem>
                                {props.state.open ? <ExpandLess onClick={props.openSubs}/>
                                                  : <ExpandMore onClick={props.openSubs}/>}
                                <ListItemText  inset primary="Category 3" />
                            </MenuItem>
                            <Collapse component="li" in={props.state.open} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    <ListItem button>
                                        <ListItemText inset primary="Category 3 1" />
                                    </ListItem>
                                </List>
                            </Collapse>
                        </MenuList>
                    </Paper>
                </div>
            </Grid>
        )
    }
};

export default categoryList;
