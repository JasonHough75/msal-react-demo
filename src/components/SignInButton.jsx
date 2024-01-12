import Button from '@mui/material/Button';

import { useMsal } from '@azure/msal-react';

export const SignInButton = () => {
    const { instance } = useMsal();

    const handlesignin = () => {
        instance.loginRedirect({
            scopes: ['user.read']
        });
    }

    const key = process.env.REACT_APP_CLIENT_KEY;
    console.log(key);
    return (
        <Button color="inherit" onClick={handlesignin}>Sign in</Button>
    )
};