
import { ProfileData } from "../components/ProfileData";
import { useMsalAuthentication } from "@azure/msal-react";
import { useEffect, useState} from "react";
import { InteractionType } from "@azure/msal-browser";

import { fetdata } from "../fetch";


export const Profile = () => {
    const [graphData, setgraphdata] = useState(null);
    const { result, error} = useMsalAuthentication(InteractionType.Popup, {
        scopes: ["user.read"]
    });

    useEffect(() => {
        if (!!graphData) {
            return;
        }

        if (!!error) {
            console.log(error);
            return;
        }

        if (result) {
            const { accesstoken } = result;
            console.log("access token");
            fetdata('https://graph.microsoft.com/v1.0/me', result.accessToken)
                .then(response => setgraphdata(response))
                .catch(error => console.log(error));
        }


    }, [graphData,error,result]);

    return (
        <>
            { graphData ? <ProfileData graphData={graphData} /> : null}
        </>
    )
}