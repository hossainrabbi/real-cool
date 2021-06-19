import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { benefitsData } from '../../data/data';
import MainTitle from '../common/MainTitle';
import BenefitItem from './BenefitItem';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(7)}px ${theme.spacing(0)}`,
    },
    benefitsItems: {
        marginTop: theme.spacing(6),
    },
}));

const Benefits = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <MainTitle
                    title="Benefits of air conditioner cleaning"
                    subTitle="Keeping life real cool"
                    align="center"
                />
                <Grid className={classes.benefitsItems} container spacing={3}>
                    {benefitsData.map((item) => (
                        <Grid item sm={3} key={item.id}>
                            <BenefitItem {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Benefits;
