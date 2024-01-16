import Typography from "@mui/material/Typography";
import { AuthenticatedTemplate, UnauthenticatedTemplate , useMsal} from "@azure/msal-react";

import { Button } from "@mui/material";
import { useState } from "react";

function Counter({initialState}) {
    const [count, setCount] = useState(initialState);
    return (
        <>
        Count: {count}
        <button onClick={() => setCount(initialState)}>Reset</button>
        <button onClick={() => setCount(setCount => setCount -1)}>-</button>
        <button onClick={() => setCount(setCount => setCount +1)}>+</button>

        </>
    )
}

export const Home = () => {

    const { instance } = useMsal();
    const activeaccount = instance.getActiveAccount();
    const [Role, SetRole] = useState(null);
    var groupmemebership = false;
    var rolesdefined = true;
    var role = false;

    const benz = () => {
        if (activeaccount.idTokenClaims?.roles === undefined)
        {
            rolesdefined = false
            SetRole("No roles defined");
            console.log("No roles defined")
        } else {
            for (let i = 0; i < activeaccount.idTokenClaims.roles.length; i++) {
                if (activeaccount.idTokenClaims.roles[i] === "Jokers")
                {
                    role = true;
                    SetRole("Correnct role added");
                    
                } 

            }
            
        }
        if (role === false && rolesdefined === true) {
           console.log("Incorrect role added");
           SetRole("Incoorect role added");
        }

        if (role === true) {
            console.log("Correct role added");
        }
        
        
        
        
        };
    

    return (
        <>
        <AuthenticatedTemplate>
        <Typography variant="h6">You are signed-in. Press the button to see if you have group access.</Typography>
        <Button onClick={benz}>Group Access</Button>
        <a>{Role}</a>


        </AuthenticatedTemplate>

        <UnauthenticatedTemplate>
        <Typography variant="h6">Please sign-in to see your group and profile information.</Typography>
        </UnauthenticatedTemplate>
            
            
        </>
    );
}