import React, { Component } from 'react';

import Grid from 'material-ui/Grid';

import ProgressBar from '../../components/body/ProgressBar';
import CategoryList from '../../components/body/CategoryList';
import TaskList from '../../components/body/TaskList';

import './Body.css';

class Body extends Component {
    state = {
        completed: 0,
        open: false,
        checked: [0],
    };

    handleOpen = () => {
        this.setState({ open: !this.state.open });
    };

    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    componentDidMount() {
        this.timer = setInterval(this.progress, 500);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    timer: number;

    progress = () => {
        const { completed } = this.state;
        if (completed > 100) {
            this.setState({ completed: 0 });
        } else {
            const diff = Math.random() * 10;
            this.setState({ completed: completed + diff });
        }
    };

    render() {
        return (
            <Grid item xs={12} className="App-body">
                <Grid container>
                    <Grid item xs={12}>
                        <ProgressBar state={this.state}/>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <CategoryList state={this.state} open={this.handleOpen}/>
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <TaskList state={this.state} toggle={this.handleToggle} />
                    </Grid>
                </Grid>
            </Grid>
        );
    };
}

export default Body;
