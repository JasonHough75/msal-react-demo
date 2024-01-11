import { useMsal } from '@azure/msal-react';
import Button from '@mui/material/Button';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handlesignout = () => {
        instance.logoutRedirect();
    }
    return (
        <Button color="inherit" onClick={handlesignout}>Sign out</Button>
    )
};