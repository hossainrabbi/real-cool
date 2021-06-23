import React from 'react';
import {
    Button,
    Container,
    Grid,
    makeStyles,
    Typography,
    useMediaQuery,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage:
            "linear-gradient(to right, rgba(2, 48, 100, 0.63), rgba(0, 0, 0, 0.3)), url('/images/Air-Conditioning-Service.jpg')",
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: 500,
        color: '#fff',
    },
    headerContent: {
        height: 500,
        alignItems: 'center',
        '& .MuiTypography-h2': {
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: theme.spacing(1),
        },
        '& .MuiButtonBase-root': {
            color: '#303030',
            margin: `${theme.spacing(2)}px 0`,
        },
    },
}));

const Header = () => {
    const classes = useStyles();
    const matches = useMediaQuery((theme) => theme.breakpoints.up('sm'));

    return (
        <div className={classes.root}>
            <Container>
                <Grid className={classes.headerContent} container>
                    <Grid item md={7} sm={9}>
                        <Typography
                            variant={matches ? 'h2' : 'h3'}
                            component="h1"
                        >
                            Air Conditioner Specialists
                        </Typography>
                        <Typography variant="subtitle2">
                            Breathe new life into your air conditioner with a
                            service or repair from one of our fully qualified
                            air conditioner specialists.
                        </Typography>
                        <Button
                            variant="contained"
                            color="inherit"
                            size="large"
                        >
                            Book Now
                        </Button>
                        <Typography variant="caption" component="p">
                            <em>
                                High Quality Installation. All Major Brands, 5
                                star service
                            </em>
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Header;
