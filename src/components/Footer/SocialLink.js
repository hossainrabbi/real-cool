import React from 'react';
import { Fab, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
    },
}));

const SocialLink = ({ url, Icon }) => {
    const classes = useStyles();

    return (
        <Fab
            color="secondary"
            className={classes.root}
            size="small"
            href={url}
            target="_blank"
        >
            <Icon />
        </Fab>
    );
};

export default SocialLink;
