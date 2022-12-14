/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import Menu from '../components/Menu';
import { AuthContext } from "../contexts/AuthContext";
import { Link } from '@reach/router';
import LazyLoad from 'react-lazyload';
import Heading from '../components/Heading';

const Featured = () => {

    const { authToken } = useContext(AuthContext)
    const [playlists, setPlaylists] = useState();

    useEffect(() => {
        if (authToken) {
            axios("https://api.spotify.com/v1/browse/featured-playlists?country=DK", {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setPlaylists(result.data.playlists.items))
        }
        
    }, [authToken]);
    

    const playlistItems = css`
        text-align: center;
        margin: 0;
        padding: 0;
    `

    const playlistItem = css`
        list-style: none;
        padding: 1em;
    `

    const itemImg = css`
        height: 425.77px;
        width: 100%;
        border-radius: 0.5em;
        box-shadow: 0.125em 0.125em 0.5em 0.3125em #888888;
    `

    return (
        <>
            <Menu title="FEATURED" />
            <Heading>Featured</Heading>
            <ul css={playlistItems}>
                { playlists?.map(playlist => (
                    <LazyLoad key={playlist.id} height={200} offset={100}>
                       <Link to={`/playlist/${playlist.id}`}>
                            <li css={playlistItem}>
                                <img key={playlist.id} src={playlist.images[0].url} alt={playlist.description} css={itemImg} />
                            </li>
                        </Link> 
                    </LazyLoad>
                ))}
            </ul>
        </>
    );
}
 
export default Featured;