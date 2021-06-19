import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        padding: theme.spacing(1),
        '& img': {
            maxWidth: '100%',
            height: 50,
            marginBottom: theme.spacing(2),
        },
    },
}));

const BenefitItem = ({ description, icon }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img src={icon} alt="" />
            <Typography color="textSecondary" variant="subtitle1" component="p">
                {description}
            </Typography>
        </div>
    );
};

export default BenefitItem;
