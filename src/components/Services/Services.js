import React from 'react';
import { Container, Grid, makeStyles } from '@material-ui/core';
import MainTitle from '../common/MainTitle';
import { servicesData } from '../../data/data';
import ServiceItem from './ServiceItem';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(7)}px 0`,
    },
    servicesGrid: {
        justifyContent: 'center',
    },
}));

const Services = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <MainTitle
                    align="center"
                    subTitle="What we do"
                    title="Services We Order"
                />
                <Grid className={classes.servicesGrid} container spacing={3}>
                    {servicesData.map((item) => (
                        <Grid item sm={6} md={4} key={item.id}>
                            <ServiceItem {...item} key={item.id} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Services;
