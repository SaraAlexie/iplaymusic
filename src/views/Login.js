/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import querystring from 'querystring'
import FillerLogin from '../components/FillerLogin'
import FingerPrint from '../components/FingerPrint'
import { useTheme } from '@emotion/react'

const Login = () => {

    const theme = useTheme()

    const headerStyle = css`
        font-size: 2.25em;
        margin-left: 0.75em;
        margin-bottom: 4em;
    `

    const logIn = css`
        text-align: center;
        border: 0.1875em solid ${theme.text};
        border-radius: 5em;
        width: 20.3125em;
        height: 3.75em;
        margin-left: auto;
        margin-right: auto;
        position: relative;
        margin-top: 1em;
        margin-bottom: 3em;
    `

    const link = css`
        color: ${theme.text};
        text-decoration: none;
        top: 30%;
        left: 27%;
        position: absolute;
        font-size: 0.9375em;
        font-weight: bold;
    `

    const options = querystring.stringify ({
        response_type: "code",
        client_id: process.env.REACT_APP_CLIENT_ID,
        scope: "user-read-email user-read-private user-library-read playlist-read-private playlist-read-collaborative streaming",
        redirect_uri: process.env.NODE_ENV === 'production' 
            ? "https://iplaymusicsann.netlify.app/callback" 
            : "http://localhost:8888/callback",
        state: "dfkrigjkfjgoe9t8r8igjfkgjwroifk84iwheiskfjoe"
    })

    //console.log(options);

    return (
        <>
            <h1 css={headerStyle}>Log In</h1>
            <FillerLogin />
            <div css={logIn}>
                <a href={`https://accounts.spotify.com/authorize?${options}`} css={link}>LOG IN WITH SPOTIFY</a>
            </div>
            <FingerPrint />
        </>
    );
}
 
export default Login;