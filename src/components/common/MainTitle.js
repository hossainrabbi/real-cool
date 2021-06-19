import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#023066',
        marginBottom: theme.spacing(5),
        textTransform: 'uppercase',
        '& .MuiTypography-root': {
            fontWeight: 800,
        },
        '& .MuiTypography-caption': {
            marginBottom: theme.spacing(1),
        },
    },
}));

const MainTitle = ({ title, subTitle, align, className }) => {
    const classes = useStyles();

    return (
        <div className={`${classes.root} ${className}`}>
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
