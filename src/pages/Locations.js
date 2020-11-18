import Grid from "@material-ui/core/Grid";
import React from "react";
import LocationsTable from "../components/LocationsTable";

function Locations() {
    return (
        <Grid container spacing={3}>
            {/* Recent Orders */}
            <Grid item xs={12}>
                <h1>Офисы</h1>
                    <LocationsTable />
            </Grid>
        </Grid>
    );
}

export default Locations;