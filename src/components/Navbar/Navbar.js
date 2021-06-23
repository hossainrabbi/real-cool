import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    AppBar,
    Toolbar,
    Container,
    Typography,
    makeStyles,
    Button,
    IconButton,
    useMediaQuery,
} from '@material-ui/core';

import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import { quickLink } from '../../data/data';
import ResponsiveNav from './ResponsiveNav';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none',
    },
    navItem: {
        '& .MuiButtonBase-root': {
            marginLeft: theme.spacing(1.5),
        },
    },
}));

const Navbar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.up('md'));
    const [showNav, setShowNav] = useState(false);

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component={Link}
                            color="inherit"
                            to="/"
                            className={classes.title}
                        >
                            Real Cool
                        </Typography>
                        {isMatch ? (
                            <div className={classes.navItem}>
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
                            </div>
                        ) : (
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setShowNav(!showNav)}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            {!isMatch && showNav && <ResponsiveNav />}
        </div>
    );
};

export default Navbar;
