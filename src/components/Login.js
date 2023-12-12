import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

export default function SignInPage(props) {
    const currentUser = props.currentUser;
    const loginCallback = props.loginCallback;
    const loginFunction = getAuth();

    function writeUserData(currentUser) {
        const db = getDatabase();
        firebaseSet(ref(db, 'users/' + currentUser.userId), {
          displayName: currentUser.displayName,
          email: currentUser.email
        });
      }

    const firebaseUIConfig = {
        options: [
            GoogleAuthProvider.PROVIDER_ID,
            {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},],
            flow: 'popup',
            credHelp: 'none',
            callbacks: {signInSuccessWithAuthResult: () => {return false;}}
    }

    return (
        <div className="container mt-5">
            <div className="text-center align-items-center login-title">
                <h1 className="display-3 fw-bold">Log in to UWTHRIFT</h1>
            </div>
            <StyledFirebaseAuth uiConfig = {firebaseUIConfig} firebaseAuth={loginFunction} />
        </div>
    );
}
