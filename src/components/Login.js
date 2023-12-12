import React from 'react';
import { getAuth, EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export function SignInPage(props) {
    const auth = getAuth();
    const loginCallback = props.loginCallback;

    const firebaseUIConfig = {
        signInOptions: [
            {
                provider: EmailAuthProvider.PROVIDER_ID,
                requiredDisplayName: true
            }
        ],
        signInFlow: 'popup',
        callbacks: {signInSuccessWithAuthResult: () => true},
        signInSuccessUrl: ('/locator'),
        credentialHelper: 'none'
    }

    return (
        <div className="container login">
            <h2 className="text-center">Login Page</h2>
            <StyledFirebaseAuth firebaseAuth={auth} uiConfig={firebaseUIConfig} />
        </div>
    );
}
