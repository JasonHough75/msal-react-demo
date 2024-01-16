import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { WelcomeName } from "./WelcomeName";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import { Link as RouterLink } from "react-router-dom";
import { Avatar, Stack } from "@mui/material";
import sse_logo from "../logo/sse_logo.png"

import { useIsAuthenticated } from "@azure/msal-react";
import { deepOrange } from "@mui/material/colors";
//{isauth ? <WelcomeName /> : null}



const NavBar = () => {
    const isauth = useIsAuthenticated();
    return (
        <div sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <img src={sse_logo} alt="logo" style={{maxHeight: "90px"}} />
                <Button  color="secondary">
                    New Account
                </Button>
                <Button  color="secondary">
                    Deactivate Account
                </Button>
                <Button  color="secondary">
                    Adjust Debt
                </Button>
                <Button  color="secondary">
                    Override top-up
                </Button>
                
                <Typography sx={{ flexGrow: 1 }}>
                        
                        </Typography>
                    
                    <Button component={RouterLink} to="/profile" color="inherit">Profile</Button>
                    {isauth ? <SignOutButton /> : <SignInButton />}
                    {isauth ?<Avatar sx={{ bgcolor: deepOrange[500]}}>B</Avatar> : null}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;