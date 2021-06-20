import {
    Container,
    List,
    ListItem,
    ListItemText,
    makeStyles,
} from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { quickLink } from '../../data/data';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#023066',
        color: '#fff',
    },
});

const ResponsiveNav = () => {
    const classes = useStyles();

    return (
        <List className={classes.root} component="nav">
            <Container>
                {quickLink.map(({ id, title, url }) => (
                    <ListItem button component={Link} to={url} key={id}>
                        <ListItemText primary={title} />
                    </ListItem>
                ))}
            </Container>
        </List>
    );
};

export default ResponsiveNav;
