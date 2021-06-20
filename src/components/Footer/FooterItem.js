import { Typography, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTypography-root': {
            color: '#fff',
            textTransform: 'uppercase',
        },
        '& ul': {
            margin: theme.spacing(0),
            padding: theme.spacing(0),
            listStyleType: 'none',
        },
        '& .MuiTypography-subtitle2': {
            textDecoration: 'none',
            marginLeft: theme.spacing(0.1),
            '&:hover': {
                textDecoration: 'underline',
            },
        },
    },
}));

const FooterItem = ({ mainTitle, navItem }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h6" component="h6">
                {mainTitle}
            </Typography>
            <ul>
                {navItem.map(({ id, title, url }) => (
                    <li key={id}>
                        <Typography
                            variant="subtitle2"
                            component={Link}
                            to={url}
                        >
                            {title}
                        </Typography>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterItem;
