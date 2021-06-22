import React from 'react';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100%',
            maxHeight: '100vh',
            display: 'inline-block',
            objectFit: 'contain',
        },
    },
});

const NotFound = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <img src="/images/oops.png" alt="oops" />
            </Container>
        </div>
    );
};

export default NotFound;
