import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/Home';

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
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <CssBaseline />
            </Router>
        </ThemeProvider>
    );
};

export default App;
