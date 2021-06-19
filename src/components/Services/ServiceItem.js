import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiCardContent-root': {
            paddingBottom: theme.spacing(0.5),
        },
    },
    projectImage: {
        overflow: 'hidden',
        '& img': {
            transition: 'all .3s',
            '&:hover': {
                transform: 'scale(1.2)',
            },
        },
    },
    serviceButtonArea: {
        justifyContent: 'space-between',
        padding: `${theme.spacing(1)}px ${theme.spacing(2)}px`,
    },
}));

const ServiceItem = ({ title, price, description, image }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <div className={classes.projectImage}>
                <CardMedia
                    component="img"
                    alt={title}
                    height="200"
                    image={image}
                    title={title}
                />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className={classes.serviceButtonArea}>
                <Typography variant="h6" component="h6">
                    ${price}
                </Typography>
                <Button variant="contained" color="secondary">
                    Book Now
                </Button>
            </CardActions>
        </Card>
    );
};

export default ServiceItem;
