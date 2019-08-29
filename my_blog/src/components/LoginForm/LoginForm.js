import React, { Component } from 'react';
import { Grid, Button, FormGroup, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
class LoginForm extends Component {

    render() {
        return (
            <Grid
                style={{ height: "100vh" }}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <FormGroup>
                    <h2>Sign in</h2>
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="center"
                    >
                        <TextField label="Login" />
                        <TextField label="Password" />
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Button variant="contained" color="primary">Log in</Button>
                        <Button variant="contained" color="secondary">
                            <Link to="join">Join</Link>
                        </Button>
                    </Grid>
                </FormGroup>
            </Grid>
        )
    }
}

export default LoginForm;