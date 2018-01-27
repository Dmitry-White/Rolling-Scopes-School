import React from 'react';
import { LinearProgress } from 'material-ui/Progress';
import Grid from 'material-ui/Grid';


const progressBar = (props) => {
    return (
        <Grid item xs={12}>
            <div className="Body-progressBar">
                <LinearProgress color="primary" mode="determinate" value={props.progress} />
            </div>
        </Grid>
    )
};

export default progressBar;
