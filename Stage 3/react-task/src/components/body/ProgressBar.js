import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';


const progressBar = (props) => {
    return (
        <Grid item xs={12}>
            <div className="Body-progressBar">
                <Paper>
                    <LinearProgress color="primary" mode="determinate" value={props.progress} />
                </Paper>
            </div>
        </Grid>
    )
};

export default progressBar;
