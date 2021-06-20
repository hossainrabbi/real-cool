import { Container, Grid, makeStyles } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import React from 'react';
import { reviewsData } from '../../data/data';
import MainTitle from '../common/MainTitle';
import ReviewItem from './ReviewItem';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(7)}px ${theme.spacing(0)}px`,
    },
    reviewGrid: {
        justifyContent: 'center',
    },
}));

const Reviews = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={0} square>
            <Container>
                <MainTitle
                    title="What our customers say"
                    subTitle="Real cool Industries"
                    align="center"
                />
                <Grid className={classes.reviewGrid} container spacing={3}>
                    {reviewsData.map((item) => (
                        <Grid item md={4} sm={6} key={item.id}>
                            <ReviewItem {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Paper>
    );
};

export default Reviews;
