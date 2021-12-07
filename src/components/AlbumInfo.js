/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import SongNumber from './SongNumber';
import { useTheme } from '@emotion/react';



const AlbumInfo = ({name, artists, tracks}) => {

    const theme = useTheme();

    const style = css`
        color: ${theme.text};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        position: relative;
        max-width: 11em;
        margin: 1em;
    `

    const infoText1 = css`
        margin: 0;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
    `

    const infoText2 = css`
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 0.75em;
    `

    return (
        <>
            <section css={style}>
                <p css={infoText1}>{name}</p>
                <p css={infoText2}>{artists}</p> 
            </section>
            <SongNumber tracks={tracks} />
        </>
    );
}
 
export default AlbumInfo;