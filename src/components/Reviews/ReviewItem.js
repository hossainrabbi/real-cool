import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    makeStyles,
    Typography,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    reviewHeading: {
        '& .MuiAvatar-root': {
            '& img': {
                maxWidth: '100%',
                height: '100%',
                objectFit: 'cover',
            },
        },
    },
    reviewContent: {
        paddingTop: theme.spacing(0),
    },
}));

const ReviewItem = ({ name, title, image, reviewValue, reviewDocument }) => {
    const classes = useStyles();

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar>
                        <img src={image} alt={name} />
                    </Avatar>
                }
                className={classes.reviewHeading}
                title={name}
                subheader={title}
            />
            <CardContent className={classes.reviewContent}>
                <Rating name="read-only" value={reviewValue} readOnly />
                <Typography variant="body2" color="textSecondary" component="p">
                    {reviewDocument}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ReviewItem;
