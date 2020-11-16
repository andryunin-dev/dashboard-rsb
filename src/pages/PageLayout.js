import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Copyright from "../components/Copyright";
import React from "react";
import {useStyles} from "../style/style";
import DefaultPage from "./DefaultPage";

function PageLayout() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <DefaultPage />
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    );
}

export default PageLayout;