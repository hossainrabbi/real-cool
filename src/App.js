import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Review from './components/Dashboard/Review/Review';
import Login from './pages/Login';
import { AuthProvider } from './components/firebase/firebase';
import PrivateRoute from './components/PrivateRoute';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#023066',
        },
        secondary: {
            main: '#3f90d2',
        },
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    overflowX: 'hidden',
                    width: '100%',
                },
                body: {
                    overflowX: 'hidden',
                    width: '100%',
                },
            },
        },
    },
});

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute exact path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                        <PrivateRoute exact path="/dashboard/bookingList">
                            <BookingList />
                        </PrivateRoute>
                        <PrivateRoute exact path="/dashboard/review">
                            <Review />
                        </PrivateRoute>
                        <Route path="*" component={NotFound} />
                    </Switch>
                    <CssBaseline />
                </Router>
            </ThemeProvider>
        </AuthProvider>
    );
};

export default App;
