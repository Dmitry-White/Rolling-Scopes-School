import React from 'react';

import Checkbox from 'material-ui/Checkbox';
import { FormControlLabel } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const showDoneCheckbox = props => <FormControlLabel
    label="Show Done"
    control={
        <Checkbox
            icon={<VisibilityOff />}
            checkedIcon={<Visibility />}
            value="checkedDone"
            onChange={props.onShowDoneCheck}
        />
    }
/>

export default showDoneCheckbox;
