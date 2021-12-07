/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { AiFillPlayCircle } from "react-icons/ai";

const iconStyle = css`
    height: 2em;
    width: 2em;
`

const PlaylistIcon = () => {
    return (  
        <>
            <svg width="0" height="0">
                <linearGradient
                    id="gradientColor"
                    x1="0%"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                >
                    <stop stopColor="#EE0979" offset="0%" />
                    <stop stopColor="#FF6A00" offset="100%" />
                </linearGradient>
            </svg>
            <AiFillPlayCircle css={iconStyle} style={{fill:"url(#gradientColor)"}} />
        </>
    );
}
 
export default PlaylistIcon;