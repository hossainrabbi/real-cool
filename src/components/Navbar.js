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
                            <Button
                                component={Link}
                                color="inherit"
                                to="/services"
                            >
                                Services
                            </Button>
                            <Button
                                component={Link}
                                color="inherit"
                                to="/products"
                            >
                                Products
                            </Button>
                            <Button
                                component={Link}
                                color="inherit"
                                to="/specials"
                            >
                                Specials
                            </Button>
                            <Button
                                component={Link}
                                color="inherit"
                                to="/franchise"
                            >
                                Franchise
                            </Button>
                            <Button
                                component={Link}
                                color="inherit"
                                to="/about"
                            >
                                About us
                            </Button>
                            <Button component={Link} color="inherit" to="/blog">
                                Blog
                            </Button>
                            <Button
                                component={Link}
                                color="inherit"
                                to="/contact"
                            >
                                Contact us
                            </Button>
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
