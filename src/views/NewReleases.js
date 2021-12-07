/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from '@reach/router';
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import AlbumInfo from '../components/AlbumInfo';
import Menu from '../components/Menu';
import { AuthContext } from "../contexts/AuthContext";
import Heading from '../components/Heading';


const NewReleases = () => {

    const { authToken } = useContext(AuthContext)
    const [newReleases, setNewReleases] = useState();

    useEffect(() => {
        if (authToken) {
            axios("https://api.spotify.com/v1/browse/new-releases?country=DK", {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setNewReleases(result.data.albums.items))
        }
        
    }, [authToken]);

    //newReleases && console.log(newReleases);

    const newList = css`
        list-style: none;
    `

    const listItem = css`
        display: flex;
        align-items: center;
    `

    const newReleaseImg = css`
        width: 3em;
        height: 3em;
        border-radius: 0.25em;
    `

    const linkStyle = css`
        text-decoration: none;
    `

    return (
        <>
            <Menu title="NEW RELEASES" />
            <Heading>New Releases</Heading>
            <ul css={newList}>
                { newReleases?.map(
                    album => (
                        <Link  key={album.id} to={`/details/${album.id}`} css={linkStyle}>
                            <li id={album.id} css={listItem}>
                                <img css={newReleaseImg} src={album.images[0].url} alt="album cover" />
                                <AlbumInfo 
                                    name={album.name}
                                    artists={album.artists[0].name}
                                    tracks={album.total_tracks}
                                />
                            </li>
                        </Link>
                    )
                )}
            </ul>
        </>
    );
}
 
export default NewReleases;

/*
    {album.name}
    {album.artists[0].name}
*/