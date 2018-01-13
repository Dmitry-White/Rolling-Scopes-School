import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import Header from './Header/Header';
import Body from './Body/Body';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <Grid container>
                    <Header />
                    <Body />
                </Grid>
            </div>
        );
    };
}

export default App;
