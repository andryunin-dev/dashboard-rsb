import React, {Component} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {useStyles} from "../../style/style";
import GroupButtons from "./GroupButtons";
import Table01 from "./Table01";
import Table02 from "./Table02";
import Table03 from "./Table03";
import Table04 from "./Table04";
import Table05 from "./Table05";


class Reports extends Component {
    state = {
        id: '2',
    };

    selection(id) {
        switch (id) {
            case '1':
                return <Table01 />;
            case '2':
                return <Table02 />;
            case '3':
                return <Table03 />;
            case '4':
                return <Table04 />;
            case '5':
                return <Table05 />;
            default:
                return null;
        }
    }

    onSelectionChange = (id) => {
        this.setState({ id });
    };

    render() {
        const classes = useStyles;
        const { id } = this.state;

        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Reports</h1>
                    <Paper className={classes.paper}>
                        <GroupButtons selection={id} onSelectionChange={this.onSelectionChange} />
                        {this.selection(id)}
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Reports;