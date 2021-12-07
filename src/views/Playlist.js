/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Menu from "../components/Menu"
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "@reach/router";
import PlaylistItem from "../components/PlaylistItem";
import PlaylistIcon from '../components/PlaylistIcon';
import PlaylistImg from '../components/PlaylistImg';
import SvgBackground from '../components/SvgBackground';
import Spinner from '../components/Spinner';


const Playlist = ({id}) => {

    const { authToken } = useContext(AuthContext)
    const [playlist, setPlaylist] = useState();

    useEffect(() => {
        if (authToken) {
            axios(`https://api.spotify.com/v1/playlists/${id}`, {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setPlaylist(result.data.tracks.items))
        }
        
    }, [authToken, id]);

    //playlist && console.log(playlist);

    const playlistHeadline = css`
        font-style: 'Poppins', sans-serif;
        color: white;
        position: relative;
        padding-left: 1em;
    `

    const listStyle = css`
        list-style: none;
        position: relative;
    `

    const listLink = css`
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
    `

    return ! playlist ? ( <Spinner /> ) :  (
        <>
        <SvgBackground />
        <Menu title="PLAYLIST" />
        <h1 css={playlistHeadline}>Playlist</h1>
        <PlaylistImg />
            <ul css={listStyle}>
                { playlist?.map(playlist => (
                    <Link css={listLink} key={playlist.track.id} to={`/player/${playlist.track.id}`} >
                        <PlaylistIcon />
                        <PlaylistItem  
                            id={playlist.id} 
                            name={playlist.track.name}
                            artist={playlist.track.artists[0].name}
                            duration={playlist.track.duration_ms}
                        />
                    </Link>
                ))}
            </ul>

        </>
    );
}
 
export default Playlist;