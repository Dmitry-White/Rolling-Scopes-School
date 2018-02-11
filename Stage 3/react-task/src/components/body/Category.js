import React from 'react';

import SubsArrow from './SubsArrow';
import SubCategory from './SubCategory';
import Add from 'material-ui-icons/Add';
import Delete from 'material-ui-icons/Delete';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

const category = props => {
    const subCategories = props.subCategories.map(subCategory => <SubCategory
        key={subCategory.id}
        id={subCategory.id}
        category_id={props.id}
        subCategoryText={subCategory.subCategoryText}
        handleRemoveSub={props.handleRemoveSub}
        opened={props.opened}
    />);

    return <div key={props.id}>
        <ListItem button className={props.menuItemClass}>
            <SubsArrow
                id={props.id}
                subs={props.subCategories}
                openSubs={props.openSubs}
                opened={props.opened}
            />
            <ListItemText inset primary={props.categoryText} />
            <ListItemSecondaryAction>
                <IconButton aria-label="Delete" onClick={() => props.handleRemoveCategory(props.id)}>
                    <Delete />
                </IconButton>
                <IconButton aria-label="Add" onClick={() => props.handleAddSub(props.id)}>
                    <Add />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
        <List>{ subCategories }</List>
    </div>
};

export default category;
