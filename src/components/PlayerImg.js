/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const playerImg = css`
    height: 17.5em;
    width: 17.5em;
    display: block;
    margin: 3.25em auto;
    
`

const PlayerImg = () => {
    return (
        <img css={playerImg} src="../imgs/plade.png" alt="LP" />
    );
}
 
export default PlayerImg;