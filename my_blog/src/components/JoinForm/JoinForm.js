import React, { Component } from 'react';
import { Grid, Button, FormGroup, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';

class JoinForm extends Component {

    render() {
        return(
            <Grid
            style={{ height: "100vh" }}
            container
            direction="row"
            justify="center"
            alignItems="center"
        >
            <FormGroup style={{ width: "30%" }} >
                <h2>Create Account</h2>
                <Grid
                    style={{ height: '30vh', margin: '25px 0' }}
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="space-between"
                >
                    <TextField style={{ width: "100%" }} label="Email" />
                    <TextField style={{ width: "100%" }} label="Login" />
                    <TextField style={{ width: "100%" }} label="Password" />
                    <TextField style={{ width: "100%" }} label="Repeat password" />
                </Grid>
                <Grid
                    style={{ width: "100%" }}
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Button variant="contained" color="primary">Create</Button>
                    <Button variant="contained" color="secondary">
                        <Link to="sign-in">Log in</Link>
                    </Button>
                </Grid>
            </FormGroup>
        </Grid>
        )
    }
}

export default JoinForm;