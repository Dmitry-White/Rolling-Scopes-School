import React from 'react';

import Input, { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import { FormControl } from 'material-ui/Form';
import Search from 'material-ui-icons/Search';

const searchBox = (props) => {

    return (
        <FormControl >
            <Input
                placeholder="Search"
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <Search />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
};

export default searchBox;
