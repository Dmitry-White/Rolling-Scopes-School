import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Category from './Category';
import ExpandLess from 'material-ui-icons/ExpandLess';
import { MenuList, MenuItem } from 'material-ui/Menu';
import Collapse from 'material-ui/transitions/Collapse';
import List, { ListItem, ListItemText } from 'material-ui/List';

const categoryList = (props) => {

    const categories = props.categories.map((category) => {
        return (
            <Category
                key={category.id}
                id={category.id}
                opened={category.opened}
                categoryText={category.categoryText}
                subCategories={category.subCategories}
                openSubs={props.openSubs}
                hasSubs={category.hasSubs}
                handleRemoveCategory={props.handleRemoveCategory}
                handleRemoveSub={props.handleRemoveSub}
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
                    <Paper>
                        <MenuList>
                            { categories }
                        </MenuList>
                    </Paper>
                </div>
            </Grid>
        )
    }
};

export default categoryList;
