import React from 'react';
import { LinearProgress } from 'material-ui/Progress';


const progressBar = (props) => {
    return (
        <LinearProgress color="primary" mode="determinate" value={props.state.completed} />
    )
};

export default progressBar;
