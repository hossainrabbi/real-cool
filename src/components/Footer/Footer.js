import { makeStyles, Typography } from '@material-ui/core';
import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import {
    information,
    others,
    quickLink,
    services,
    socialLink,
} from '../../data/data';
import FooterItem from './FooterItem';
import SocialLink from './SocialLink';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#023066',
        paddingTop: theme.spacing(8),
    },
    footerLogo: {
        textAlign: 'center',
    },
    socialLink: {
        marginTop: 10,
    },
    footerContent: {
        alignItems: 'center',
        justifyContent: 'center',
        '& .MuiTypography-h4': {
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 700,
        },
    },
    copyRight: {
        color: '#fff',
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(2),
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <footer className={classes.root}>
            <Container>
                <Grid className={classes.footerContent} container spacing={5}>
                    <Grid className={classes.footerLogo} item md={4} xs={12}>
                        <Typography variant="h4" component={Link} to="/">
                            Real Cool
                        </Typography>
                        <div className={classes.socialLink}>
                            {socialLink.map((item) => (
                                <SocialLink {...item} key={item.id} />
                            ))}
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item sm={4} xs={6}>
                                <FooterItem
                                    mainTitle="Quick Link"
                                    navItem={quickLink}
                                />
                            </Grid>
                            <Grid item sm={4} xs={6}>
                                <FooterItem
                                    mainTitle="Services"
                                    navItem={services}
                                />
                            </Grid>
                            <Grid item sm={4} xs={6}>
                                <FooterItem
                                    mainTitle="Information"
                                    navItem={information}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Typography
                    className={classes.copyRight}
                    align="center"
                    variant="subtitle2"
                    component="p"
                >
                    ©Copyright {new Date().getFullYear()}, Real Cool IndusTries,
                    All Right Reserved.
                </Typography>
            </Container>
        </footer>
    );
};

export default Footer;
