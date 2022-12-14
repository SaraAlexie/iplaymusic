/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react';
import Duration from './Duration';


const AlbumSong = ({song, duration}) => {

    const theme = useTheme();

    const songStyle = css`
        margin-left: 1em;
        color: ${theme.text};
        display: flex;
    `

    return (
        <li css={songStyle}>
            <p>{song}</p>
            <Duration duration={duration} />
        </li>
    );
}
 
export default AlbumSong;