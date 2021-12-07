/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const albumCover = css`
        position: relative;
        height: 15em;
        width: 15em;
        display: block;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.25em;
`

const AlbumCover = ({cover}) => {
    return (
        <img css={albumCover} src={cover} alt="Album cover" />
    );
}
 
export default AlbumCover;