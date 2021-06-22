import firebase from 'firebase/app';
import 'firebase/auth';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const auth = useProvider();

    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvider = () => {
    const [user, setUser] = useState({});

    const signInWithProvider = () => {
        firebase
            .auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                const user = result.user;
                user.error = '';
                user.status = 'success';
                setUser(user);
                window.history.back();
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
                setUser(user);
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
