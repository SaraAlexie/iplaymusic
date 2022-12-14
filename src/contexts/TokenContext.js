import { createContext, useState, useEffect } from "react";
//import axios from "axios";

export const TokenContext = createContext();

const TokenContextProvider = (props) => {

    const [token, setToken] = useState();

    useEffect(() => {
        /*const authoptions = {
            url: "https://accounts.spotify.com/api/token",
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(process.env.REACT_APP_CLIENT_ID + ":" + process.env.REACT_APP_CLIENT_SECRET)
            },
            body: "grant_type=client_credentials"
        }
        axios(authoptions)
            .then(result => setToken(result.data))*/
        fetch("https://accounts.spotify.com/api/token", {
            method: "post",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Authorization": "Basic " + btoa(process.env.REACT_APP_CLIENT_ID + ":" + process.env.REACT_APP_CLIENT_SECRET)
            },
            body: "grant_type=client_credentials"
        })
        .then(response => response.json())
        .then(result => setToken(`${result.token_type} ${result.access_token}`))
    }, []);

    token && console.log(token)

    return (
        <TokenContext.Provider value={{ token }}>
            {props.children}
        </TokenContext.Provider>
    );
}
 
export default TokenContextProvider;