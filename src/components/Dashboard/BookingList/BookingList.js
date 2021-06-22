import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { servicesData } from '../../../data/data';
import ServiceItem from '../../Services/ServiceItem';
import Dashboard from '../Dashboard';

const useStyles = makeStyles((theme) => ({
    servicesGrid: {
        justifyContent: 'center',
    },
}));

const BookingList = () => {
    const classes = useStyles();

    return (
        <Dashboard>
            <Grid className={classes.servicesGrid} container spacing={3}>
                {servicesData.map((item) => (
                    <Grid item sm={6} md={4} key={item.id}>
                        <ServiceItem {...item} key={item.id} />
                    </Grid>
                ))}
            </Grid>
        </Dashboard>
    );
};

export default BookingList;
