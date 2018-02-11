import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import Body from './Body/Body';
import Header from './Header/Header';

import classes from './App.module.css';

class App extends Component {
    state = {
        showDone: false,
    };

    onShowDoneCheck = () => {
        this.setState({ showDone: !this.state.showDone });
    };

    render() {
        return <Grid container className={classes.App}>
            <Header app_state={this.state} onShowDoneCheck={this.onShowDoneCheck} />
            <Body app_state={this.state} />
        </Grid>
    };
}

export default App;
