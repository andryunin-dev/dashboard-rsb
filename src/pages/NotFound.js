import Grid from "@material-ui/core/Grid";
import React from "react";

function NotFound() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>404 Not found</h1>
            </Grid>
        </Grid>
    );
}

export default NotFound;