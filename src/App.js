import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#023066',
        },
        secondary: {
            main: '#3f90d2',
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                {/* <Navbar /> */}
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
                <Footer />
                <CssBaseline />
            </Router>
        </ThemeProvider>
    );
};

export default App;
