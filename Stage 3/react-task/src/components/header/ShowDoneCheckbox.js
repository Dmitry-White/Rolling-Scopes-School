import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';

const showDoneCheckbox = () => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    value="checkedDone"
                />
            }
            label="Show Done"
        />
    )
};

export default showDoneCheckbox;
