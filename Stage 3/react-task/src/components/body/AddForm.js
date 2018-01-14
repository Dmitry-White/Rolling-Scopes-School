import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Add from 'material-ui-icons/Add';

const addField = (props) => {
    var text_size, button_size, sm_size, text_placeholder, form_class, text_class;
    if (props.name === "Category") {
        sm_size = 3;
        text_size = 9
        button_size = 3
        text_placeholder = "New Category?"
        form_class = "Body-addCategory"
        text_class = "Add Category"
    } else if (props.name === "Task") {
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
                <div className={form_class}>
                    <Grid container>
                        <Grid item xs={12} sm={text_size}>
                            <TextField
                                placeholder={text_placeholder}
                                className={text_class}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={button_size}>
                            <Button color="primary" fab mini type="submit">
                                <Add />
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Paper>
        </Grid>
    )
};

export default addField;
