import Container from "@material-ui/core/Container";
import React from "react";
import {useStyles} from "../style/style";
import {Outlet} from 'react-router-dom';


function PageLayout() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Outlet />
            </Container>
        </main>
    );
}

export default PageLayout;