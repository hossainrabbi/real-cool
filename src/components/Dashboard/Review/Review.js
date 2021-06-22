import React, { useState } from 'react';
import {
    Grid,
    TextField,
    makeStyles,
    Container,
    Button,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import Dashboard from '../Dashboard';

const useStyles = makeStyles((theme) => ({
    rating: {
        marginLeft: theme.spacing(2),
    },
    reviewBtn: {
        textAlign: 'right',
        marginTop: theme.spacing(2),
    },
}));

const Review = () => {
    const classes = useStyles();
    const [value, setValue] = useState(5);

    return (
        <Dashboard>
            <Container>
                <form>
                    <Grid container spacing={5}>
                        <Grid item sm={6}>
                            <TextField
                                label="Name*"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item sm={6}>
                            <TextField
                                label="Your Title*"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Rating
                            name="simple-controlled"
                            className={classes.rating}
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                        <Grid item sm={12}>
                            <TextField
                                label="Description*"
                                multiline
                                rows={4}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                    <div className={classes.reviewBtn}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Add Review
                        </Button>
                    </div>
                </form>
            </Container>
        </Dashboard>
    );
};

export default Review;
