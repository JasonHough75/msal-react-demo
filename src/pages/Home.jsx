import Typography from "@mui/material/Typography";
import { AuthenticatedTemplate, UnauthenticatedTemplate , useMsal} from "@azure/msal-react";

import { Button } from "@mui/material";

export const Home = () => {

    const { instance } = useMsal();
    const activeaccount = instance.getActiveAccount();
    

    const benz = () => {
        if (activeaccount.idTokenClaims?.roles === undefined)
        {
            console.log("No roles defined")
        } else {
            for (let i = 0; i < activeaccount.idTokenClaims.roles.length; i++) {
                if (activeaccount.idTokenClaims.roles[i] == "Jokers")
                {
                    console.log("Jokers role added")
                } else {
                    console.log("Incorrect role added")
                }
            }
        }
        
        
        
        
        };
    

    return (
        <>
        <AuthenticatedTemplate>
        <Typography variant="h6">You are signed-in. Press the button to see if you have group access.</Typography>
        <Button onClick={benz}>Group Access</Button>
        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
        <Typography variant="h6">Please sign-in to see your profile information.</Typography>
        </UnauthenticatedTemplate>
            
            
        </>
    );
}