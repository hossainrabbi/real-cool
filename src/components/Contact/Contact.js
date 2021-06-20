import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@material-ui/core';
import { Container, Grid, makeStyles } from '@material-ui/core';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import MailIcon from '@material-ui/icons/Mail';
import React from 'react';
import MainTitle from '../common/MainTitle';
import GoogleMap from './GoogleMap';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: `${theme.spacing(7)}px ${theme.spacing(0)}px`,
    },
    mainTitle: {
        marginBottom: theme.spacing(1),
    },
    contactInfo: {
        alignItems: 'center',
        '& .MuiGrid-root': {
            width: '100%',
        },
    },
    contactList: {
        '& .MuiListItem-root': {
            padding: theme.spacing(0),
            '& .MuiListItemIcon-root': {
                minWidth: 40,
            },
        },
    },
    googleMap: {
        minWidth: '100%',
        height: 250,
        border: 0,
    },
}));

const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Grid className={classes.contactInfo} container spacing={3}>
                    <Grid item sm={6}>
                        <MainTitle
                            title="Contact Us"
                            subTitle="We provide the best service"
                            className={classes.mainTitle}
                        />
                        <Typography
                            variant="subtitle2"
                            color="textSecondary"
                            component="p"
                        >
                            Real Cool Industries specialise in the support,
                            installation, service and repair of home air
                            conditioning in Redland Bay and surrounding suburbs.
                            We supply and install all types of reputable air
                            conditioning brands including Daikin, Fujitsu,
                            Hitachi and Mitsubishi, just to name a few.
                        </Typography>
                        <List className={classes.contactList}>
                            <ListItem>
                                <ListItemIcon>
                                    <PhoneInTalkIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        variant="subtitle2"
                                        component="p"
                                        color="textSecondary"
                                    >
                                        +8801712121212
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <MailIcon color="secondary" />
                                </ListItemIcon>
                                <ListItemText>
                                    <Typography
                                        variant="subtitle2"
                                        component="p"
                                        color="textSecondary"
                                    >
                                        support@realcool.com
                                    </Typography>
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item sm={6}>
                        <GoogleMap className={classes.googleMap} />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;
