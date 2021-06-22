import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
    const auth = useProvider();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvider = () => {
    const [user, setUser] = useState({});
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };

    const formateUser = (user) => ({
        email: user.email,
        name: user.displayName,
        photoURL: user.photoURL,
    });

    const signInWithProvider = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = formateUser(result.user);
                user.error = '';
                user.status = 'success';
                setUser(user);
                history.replace(from);
                return user;
            })
            .catch((error) => {
                const user = {};
                user.status = '';
                user.error = error.message;
                setUser(user);
                return user;
            });
    };

    const signOut = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                setUser({});
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(formateUser(user));
            } else {
                setUser({});
            }
        });

        return () => unsubscribe();
    }, []);

    return {
        user,
        signInWithProvider,
        signOut,
    };
};
