/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Menu from "../components/Menu"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { AuthContext } from "../contexts/AuthContext"
import AudioCard from "../components/AudioCard"
import Spinner from "../components/Spinner"
import PlayerImg from '../components/PlayerImg'
import colors from '../components/Colors'


const Player = ({id}) => {

    const { authToken } = useContext(AuthContext)
    const [playTrack, setPlayTrack] = useState();

    useEffect(() => {
        if (authToken) {
            axios(`https://api.spotify.com/v1/tracks/${id}`, {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setPlayTrack(result.data))
        }
        
    }, [authToken, id]);

    //playTrack && console.log(playTrack);

    const playerInfo = css`
        color: ${colors.secondary};
        text-align: center;
        margin: 0.25em 0;
    `

    return ! playTrack ? ( <Spinner /> ) : (

        <>
            <Menu title="PLAYING" />
            <PlayerImg />
            <h2 css={playerInfo}>{playTrack.name}</h2>
            <p css={playerInfo}>{playTrack.artists[0].name}</p>
            <AudioCard />
        </>
    );
}
 
export default Player;