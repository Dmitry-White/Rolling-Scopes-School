import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import Header from './Header/Header';
import Body from './Body/Body';

import './App.css';

class App extends Component {
    state = {
        showDone: false
    };

    onShowDoneCheck = () => {
        this.setState({ showDone: !this.state.showDone });
    };

    render() {
        return (
            <div className="App" >
                <Grid container>
                    <Header app_state={this.state} onShowDoneCheck={this.onShowDoneCheck} />
                    <Body app_state={this.state} />
                </Grid>
            </div>
        );
    };
}

export default App;
