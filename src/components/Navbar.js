import React from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    Grid,
    Button,
    makeStyles,
} from '@material-ui/core';
import { quickLink } from '../data/data';

const useStyles = makeStyles((theme) => ({
    root: {},
    navLogo: {
        '& .MuiTypography-root': {
            textDecoration: 'none',
        },
    },
    navItem: {
        '& .MuiButtonBase-root': {
            marginLeft: theme.spacing(1.5),
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <Container>
                    <Grid container>
                        <Grid className={classes.navLogo} item>
                            <Typography
                                variant="h6"
                                component={Link}
                                color="inherit"
                                to="/"
                            >
                                Real Cool
                            </Typography>
                        </Grid>
                        <Grid item sm />
                        <Grid className={classes.navItem} item>
                            {quickLink.map(({ id, title, url }) => (
                                <Button
                                    component={Link}
                                    color="inherit"
                                    to={url}
                                    key={id}
                                >
                                    {title}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                component={Link}
                                color="secondary"
                                to="/login"
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Container>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
