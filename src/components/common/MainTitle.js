import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#023066',
        margin: `${theme.spacing(5)}px 0`,
        textTransform: 'uppercase',
        '& .MuiTypography-root': {
            fontWeight: 800,
        },
    },
}));

const MainTitle = ({ title, subTitle, align }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography align={align} variant="caption" component="p">
                {subTitle}
            </Typography>
            <Typography align={align} variant="h5" component="h5">
                {title}
            </Typography>
        </div>
    );
};

export default MainTitle;
