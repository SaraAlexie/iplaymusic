/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useTheme } from '@emotion/react';


const SongNumber  = ({tracks}) => {

    const theme = useTheme();

    const trackNumber = css`
        position: absolute;
        right: 1.5em;
        color: ${theme.text};
        font-size: 0.75em;
    ` 

    return (
        <>
            <p css={trackNumber}>{tracks} song(s)</p>
        </>
    );
}
 
export default SongNumber;