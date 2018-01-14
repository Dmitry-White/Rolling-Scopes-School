import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const showDoneCheckbox = () => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    icon={<VisibilityOff />}
                    checkedIcon={<Visibility />}
                    value="checkedDone"
                />
            }
            label="Show Done"
        />
    )
};

export default showDoneCheckbox;
