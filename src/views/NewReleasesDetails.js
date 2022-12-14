/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Menu from "../components/Menu"
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Spinner from "../components/Spinner";
import SvgBackground from "../components/SvgBackground";
import AlbumCover from '../components/AlbumCover';
import AlbumHeader from '../components/AlbumHeader';
import { Link } from '@reach/router';
import AlbumSong from '../components/AlbumSong';
import PlaylistIcon from '../components/PlaylistIcon';

const NewReleaseDatails = ({id}) => {
    //console.log(id);
    const { authToken } = useContext(AuthContext)
    const [playlist, setPlaylist] = useState();

    useEffect(() => {
        if (authToken) {
            axios(`https://api.spotify.com/v1/albums/${id}`, {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setPlaylist(result.data))
        }
    }, [authToken, id]);

    //playlist && console.log(playlist.tracks.items);

    const albumHeadline = css`
        font-style: 'Poppins', sans-serif;
        position: relative;
        color: white;
        padding-left: 1em;
    `

    const songList = css`
        list-style: none;
    `

    const listLink = css`
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        padding-bottom: 0.5em;
    `

    return ! playlist ? ( <Spinner /> ) :(
        <>
            <SvgBackground />
            <Menu title="ALBUM" />
            <h1 css={albumHeadline}>Album</h1>
            <AlbumCover cover={playlist.images[0].url} />
            <AlbumHeader name={playlist.name} artist={playlist.artists[0].name} />
            <ul css={songList}>
                {playlist.tracks.items?.map( song => (
                    <Link css={listLink} key={song.id} to={`/player/${song.id}`}>
                        <PlaylistIcon />
                        <AlbumSong 
                            song={song.name} 
                            duration={song.duration_ms}
                        />
                    </Link> 
                ))}
            </ul>
        </>
    );
}
 
export default NewReleaseDatails;