import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Category from './Category';
import List from 'material-ui/List';

const categoryList = props => {
    const categories = props.categories.map(category => <Category
        key={category.id}
        id={category.id}
        menuItemClass={props.menuItemClass}
        opened={category.opened}
        categoryText={category.categoryText}
        subCategories={category.subCategories}
        openSubs={props.openSubs}
        handleRemoveCategory={props.handleRemoveCategory}
        handleAddSub={props.handleAddSub}
        handleRemoveSub={props.handleRemoveSub}
    />);

    if (props.categories.length === 0) {
        return null;
    } else {
        return <Grid item xs={12} sm={3}>
            <Paper>
                <List>{ categories }</List>
            </Paper>
        </Grid>
    }
};

export default categoryList;
