import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./styles/theme";

import { BrowserRouter } from "react-router-dom";

import App from './App';

// import public client application for msal
import { PublicClientApplication, EventType } from '@azure/msal-browser';


// create an public client application for MSAL
const publicclientapp = new PublicClientApplication({
    auth:{
        clientId: process.env.REACT_APP_AZURE_CLIENT_ID,
        authority: process.env.REACT_APP_AZURE_AUTHORITY,
        redirectUri: '/'
    }
});



publicclientapp.addEventCallback(event => {
    if (event.eventType === EventType.LOGIN_SUCCESS) {
        console.log(event);
        publicclientapp.setActiveAccount(event.payload.account);
    }

})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App msalinstance={publicclientapp}/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>
);
