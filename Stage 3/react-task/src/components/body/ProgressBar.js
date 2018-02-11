import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { LinearProgress } from 'material-ui/Progress';


const progressBar = props => <Grid item xs={12}>
    <Paper>
        <LinearProgress color="primary" variant="determinate" value={props.progress} />
    </Paper>
</Grid>

export default progressBar;
