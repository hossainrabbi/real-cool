import { Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../components/firebase/firebase';

const Login = () => {
    const { signInWithProvider } = useContext(AuthContext);

    return (
        <div>
            <Button onClick={signInWithProvider}>Login</Button>
        </div>
    );
};

export default Login;
