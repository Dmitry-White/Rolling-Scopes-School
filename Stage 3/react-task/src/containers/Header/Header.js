import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import SearchBox from '../../components/header/SearchBox';
import ShowDoneCheckbox from '../../components/header/ShowDoneCheckbox';

import classes from './Header.module.css';

class Header extends Component {
    render() {
        return <Grid item xs={12} className={classes.Header}>
            <Paper>
                <AppBar position="static" color="inherit">
                    <Toolbar>
                        <Typography
                            type="title"
                            className={classes.title}
                        >
                            To-Do List
                        </Typography>
                        <ShowDoneCheckbox
                            onShowDoneCheck={this.props.onShowDoneCheck}
                        />
                        <SearchBox />
                    </Toolbar>
                </AppBar>
            </Paper>
        </Grid>
    };
}

export default Header;
