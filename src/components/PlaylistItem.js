/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react';
import Duration from './Duration';


const PlaylistItem = ({id, name, artist, duration}) => {

    const theme = useTheme()

    const textStyle = css`
        color: ${theme.text};
        padding: 1em 0 1em 1em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 14em;
        display: flex;
    `

    const songName = css`
        font-weight: bold;
        margin: 0;
    `

    const artistName = css`
        font-size: 0.8em;
        margin: 0;
    `

    return (
        <>
            <li key={id} css={textStyle}>
                <section>
                    <p css={songName}>{name}</p>
                    <p css={artistName}>{artist}</p>
                </section>
                <Duration duration={duration} />
            </li>
        </>
    );
}
 
export default PlaylistItem;