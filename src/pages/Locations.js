import {useStyles} from "../style/style";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Orders from "../components/Orders";
import React from "react";

function Locations() {
    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <h1>Офисы</h1>
                <Paper className={classes.paper}>
                    <Orders />
                </Paper>
            </Grid>
        </Grid>
    );
}

export default Locations;