import Grid from "@mui/material/Grid";
import { PageLayout } from "./components/PageLayout";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

import { MsalProvider, useMsal, useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from "react";
import { InteractionRequiredAuthError } from "@azure/msal-browser";

function App({ msalinstance}) {
    return (
        <MsalProvider instance={msalinstance}>
            <PageLayout>
                <Grid container justifyContent="center">
                    <Pages />
                </Grid>
            </PageLayout>
        </MsalProvider>
    );
}

const Pages = () => {
    const { instance } = useMsal();
    const IsAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if (!IsAuthenticated) {
            instance.ssoSilent({
                scopes: ["user.read"],
                loginHint: ""
            }).then((response) => {
                instance.setActiveAccount(response.account);

            }).catch((error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    instance.loginRedirect({
                        scopes: ["user.read"],
                    });
                }
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    );
}

export default App;
