import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import Button from 'material-ui/Button';
import Add from 'material-ui-icons/Add';
import TextField from 'material-ui/TextField';

const addField = (props) => {
    var text_size, button_size, sm_size, text_placeholder,
        form_class, text_class, input_value;
    if (props.name === "Category") {
        input_value = props.categoryValue;
        sm_size = 3;
        text_size = 9
        button_size = 3
        text_placeholder = "New Category?"
        form_class = "Body-addCategory"
        text_class = "Add Category"
    } else if (props.name === "Task") {
        input_value = props.taskValue;
        sm_size = 9;
        text_size = 11
        button_size = 1
        text_placeholder = "New Task?";
        form_class = "Body-addTask";
        text_class = "Add Task";
    }
    return (
        <Grid item xs={12} sm={sm_size}>
            <Paper elevation={2}>
                <form className={form_class}>
                    <Grid container>
                        <Grid item xs={12} sm={text_size}>
                            <TextField
                                fullWidth
                                value={input_value}
                                className={text_class}
                                placeholder={text_placeholder}
                                onChange={(e) => props.handleInputChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={button_size}>
                            <Button
                                fab
                                mini
                                color="primary"
                                type="submit"
                                onClick={(e) => props.handleAdd(e)}
                            >
                                <Add />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Grid>
    )
};

export default addField;
