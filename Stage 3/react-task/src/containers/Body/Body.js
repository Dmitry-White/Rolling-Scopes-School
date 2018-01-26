import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import ProgressBar from '../../components/body/ProgressBar';
import AddForm from '../../components/body/AddForm';
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

    handleCheck = value => () => {
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

    handleEdit = () => {
        console.log("Edit!");
    }

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
            <Grid item xs={12}>
                <div className="App-body">
                    <Grid container>
                        <ProgressBar state={this.state}/>
                        <AddForm name="Category" />
                        <AddForm name="Task" />
                        <CategoryList state={this.state} open={this.handleOpen}/>
                        <TaskList
                            checked={this.state.checked}
                            handleCheck={this.handleCheck}
                            handleEdit={this.handleEdit}
                        />
                    </Grid>
                </div>
            </Grid>
        );
    };
}

export default Body;
