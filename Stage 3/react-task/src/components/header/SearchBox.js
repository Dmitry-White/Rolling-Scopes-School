import React from 'react';

import Search from 'material-ui-icons/Search';
import { FormControl } from 'material-ui/Form';
import IconButton from 'material-ui/IconButton';
import Input, { InputAdornment } from 'material-ui/Input';

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
