import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Category from './Category';
import { MenuList } from 'material-ui/Menu';

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
                handleAddSub={props.handleAddSub}
                handleRemoveSub={props.handleRemoveSub}
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
