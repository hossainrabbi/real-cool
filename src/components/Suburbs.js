import React from 'react';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {
    Container,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
    Typography,
    Paper,
    Button,
} from '@material-ui/core';
import MainTitle from './common/MainTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(7)}px 0`,
    },
    mainTitle: {
        marginBottom: theme.spacing(1),
    },
    suburbsContainer: {
        alignItems: 'center',
    },
    suburbsImage: {
        '& img': {
            maxWidth: '100%',
            height: 350,
            objectFit: 'cover',
        },
    },
    suburbsList: {
        '& .MuiListItem-root': {
            padding: theme.spacing(0),
            '& .MuiListItemIcon-root': {
                minWidth: 40,
            },
        },
    },
}));

const Suburbs = () => {
    const classes = useStyles();

    return (
        <Paper className={classes.root} elevation={0} square>
            <Container>
                <Grid
                    className={classes.suburbsContainer}
                    container
                    spacing={5}
                >
                    <Grid className={classes.suburbsImage} item sm={6}>
                        <img
                            src="images/carrier-cooling.jpg"
                            alt="carrier cooling"
                        />
                    </Grid>
                    <Grid item sm={6}>
                        <MainTitle
                            title="Air conditioning services in Redlands bay and suburbs"
                            subTitle="Real cool industries"
                            className={classes.mainTitle}
                        />
                        <Typography
                            variant="subtitle2"
                            component="p"
                            color="textSecondary"
                        >
                            Real Cool Industries specialized in the supply,
                            installation, service and repair of home air
                            conditioning in Redlands Bay and surrounding
                            suburbs. We supply and install all types of
                            reputable air conditioning brands including Daikin,
                            Fujitsu, Hitachi and Mitsubishi just to name few.
                        </Typography>
                        <List className={classes.suburbsList}>
                            {[
                                'High Quality Installation',
                                'All Major Brands Included',
                                'Five Start Air Conditioner Cloning',
                            ].map((item) => (
                                <ListItem key={item}>
                                    <ListItemIcon>
                                        <CheckCircleOutlineIcon color="secondary" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                        >
                            Book Now
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    );
};

export default Suburbs;
