import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from './firebase/firebase';

function PrivateRoute({ children, ...rest }) {
    const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
