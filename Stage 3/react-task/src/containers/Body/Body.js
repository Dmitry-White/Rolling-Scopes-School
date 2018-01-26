import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import uuid from 'uuid';

import ProgressBar from '../../components/body/ProgressBar';
import AddForm from '../../components/body/AddForm';
import CategoryList from '../../components/body/CategoryList';
import TaskList from '../../components/body/TaskList';

import './Body.css';

class Body extends Component {
    state = {
        categoryInput: "",
        categories: [],
        taskInput: "",
        tasks: [],
        completed: 0,
        open: false,
        checked: [0],
    };

    handleCategoryInput = (e) => {
        this.setState({ categoryInput: e.target.value });
    };

    handleTaskInput = (e) => {
        this.setState({ taskInput: e.target.value });
    };

    handleCategoryAdd = () => {
        if (this.state.categoryInput === "") return;
        this.setState({
            categories: [
              ...this.state.categories,
              {
                id:uuid(),
                categoryText:this.state.categoryInput,
              }
            ],
            categoryInput: ""
        });
    };

    handleTaskAdd = () => {
        if (this.state.taskInput === "") return;
        this.setState({
            tasks: [
              ...this.state.tasks,
              {
                id:uuid(),
                taskText:this.state.taskInput,
                checked: false,
              }
            ],
            taskInput: ""
        });
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
        console.log(this.state);
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
                        <AddForm
                            name="Category"
                            categoryValue={this.state.categoryInput}
                            handleInputChange={this.handleCategoryInput}
                            handleAdd={this.handleCategoryAdd}
                        />
                        <AddForm
                            name="Task"
                            taskValue={this.state.taskInput}
                            handleInputChange={this.handleTaskInput}
                            handleAdd={this.handleTaskAdd}
                        />
                        <CategoryList state={this.state} open={this.handleOpen}/>
                        <TaskList
                            tasks={this.state.tasks}
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
