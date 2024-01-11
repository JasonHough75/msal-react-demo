import Typography from "@mui/material/Typography";
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from "react";

export const WelcomeName = () => {
    const { instance } = useMsal();
    const [username, setusername] = useState('');

    useEffect(() => {
        const currentaccount = instance.getActiveAccount();

        if (currentaccount) {
            setusername(currentaccount.username);
        }
    }, [instance]);

    return <Typography variant="h6">Welcome, {username}</Typography>;
};