/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const playlistImg = css`
        position: relative;
        height: 9.6875em;
        width: 9.6875em;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.25em;
    `

const PlaylistImg = () => {
    return (  
        <img css={playlistImg} src="../imgs/guitarist.jpeg" alt="Guitarist playing" />
    );
}
 
export default PlaylistImg;