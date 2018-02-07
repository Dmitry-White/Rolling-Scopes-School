import React, { Component } from 'react';
import Grid from 'material-ui/Grid';

import uuid from 'uuid';
import AddForm from '../../components/body/AddForm';
import TaskList from '../../components/body/TaskList';
import ProgressBar from '../../components/body/ProgressBar';
import CategoryList from '../../components/body/CategoryList';

import './Body.css';

class Body extends Component {
    state = {
        tasks: [],
        categories: [],
        taskInput: "",
        categoryInput: "",
        progress: 0,
        doneTasks: [],
    };

    progressCheckTimer: number;

    handleCategoryInput = (e) => {
        this.setState({ categoryInput: e.target.value });
    };

    handleTaskInput = (e) => {
        this.setState({ taskInput: e.target.value });
    };

    handleCategoryAdd = (e) => {
        e.preventDefault();
        if (this.state.categoryInput === "") return;
        this.setState({
            categories: [
              ...this.state.categories,
              {
                id:uuid(),
                categoryText:this.state.categoryInput,
                hasSubs: false,
                subCategories: [],
                opened: false,
              }
            ],
            categoryInput: ""
        });
    };

    handleTaskAdd = (e) => {
        e.preventDefault();
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

    handleOpenSubs = (category_id) => {
        const finalCategories = this.state.categories.map((category) => {
            if(category.id === category_id) {
                category.opened = !category.opened;
            };
            return category;
        });
        this.setState({ categories: finalCategories });
    };

    handleRemoveCategory = (category_id) => {
        const finalCategories = this.state.categories.filter((category) => {
            if(category.id !== category_id) return category;
        });
        this.setState({ categories: finalCategories });
    };

    handleAddSub = (category_id) => {
        const finalCategories = this.state.categories.map((category) => {
            if(category.id === category_id) {
                category.hasSubs = true;
                category.subCategories = [
                  ...category.subCategories,
                  {
                    id:uuid(),
                    subCategoryText: category.categoryText
                                    + " "
                                    + (category.subCategories.length + 1),
                  }
                ]
            };
            return category;
        });
        this.setState({ categories: finalCategories });
    };

    handleRemoveSub = (category_id, subCategory_id) => {
        const finalCategories = this.state.categories.map((category) => {
            let tempSubs = category.subCategories;
            if(category.id === category_id) {
                tempSubs = category.subCategories.filter((subCategory) => {
                    if(subCategory.id !== subCategory_id) return subCategory;
                });
            };
            category.subCategories = tempSubs;
            return category;
        });
        this.setState({ categories : finalCategories});
    };

    handleCheck = (task_id) => {
        const doneTasks = this.state.doneTasks;
        const currentIndex = doneTasks.indexOf(task_id);
        const newDoneTasks = [...doneTasks];

        const finalTasks = this.state.tasks.map((task) => {
            if(task.id === task_id) {
                task.checked = !task.checked;
            };
            return task;
        });

        if (currentIndex === -1) {
            newDoneTasks.push(task_id);
        } else {
            newDoneTasks.splice(currentIndex, 1);
        }

        this.setState({
            tasks: finalTasks,
            doneTasks: newDoneTasks,
        });
    };

    handleEdit = () => {
        console.log("Edit!");
        console.log(this.state);
    };

    componentDidMount() {
        this.progressCheckTimer = setInterval(this.progress, 500);
    };

    componentWillUnmount() {
        clearInterval(this.progressCheckTimer);
    };

    progress = () => {
        const progress = this.state.progress;
        const allTasks = this.state.tasks.length;
        const doneTasks = this.state.doneTasks.length;
        const newProgress = doneTasks/allTasks * 100;
        this.setState({ progress: newProgress });
        if (progress >= 100) {
            this.tasksFinish()
        }
    };

    tasksFinish = () => {
        console.log("Congratulations!");
    };

    render() {
        return (
            <Grid item xs={12}>
                <div className="App-body">
                    <Grid container>
                        <ProgressBar progress={this.state.progress}/>
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
                        <CategoryList
                            state={this.state}
                            categories={this.state.categories}
                            openSubs={this.handleOpenSubs}
                            handleRemoveCategory={this.handleRemoveCategory}
                            handleAddSub={this.handleAddSub}
                            handleRemoveSub={this.handleRemoveSub}
                        />
                        <TaskList
                            tasks={this.state.tasks}
                            doneTasks={this.state.doneTasks}
                            handleCheck={this.handleCheck}
                            handleEdit={this.handleEdit}
                            showDone={this.props.app_state.showDone}
                        />
                    </Grid>
                </div>
            </Grid>
        );
    };
}

export default Body;
