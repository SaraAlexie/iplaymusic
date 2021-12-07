/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'



const Duration = ({duration}) => {

    var totalSeconds = Math.floor(duration / 1000)
    var minutes = Math.floor(totalSeconds / 60)
    var seconds = totalSeconds % 60
    if (seconds < 10) seconds = "0"+seconds
    
    const durationStyle = css`
        position: absolute;
        right: 1em;
    `
    
    return ( 
        <p css={durationStyle}>{minutes}:{seconds}</p>
     );
}
 
export default Duration;