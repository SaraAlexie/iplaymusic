/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const sectionStyle = css`
    text-align: center;
    margin: 0.25em;
`
const albumText = css`
    margin: 0;
`

const AlbumHeader = ({name, artist}) => {
    return (
        <section css={sectionStyle}>
            <h2 css={albumText}>{name}</h2>
            <h3 css={albumText}>{artist}</h3>
        </section>
    );
}
 
export default AlbumHeader;