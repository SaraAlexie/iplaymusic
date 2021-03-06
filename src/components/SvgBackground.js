/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


const svg = css`
        position: absolute;
        overflow: hidden scroll y;
        width: 23.4375em;
        height: 14.0625em;
`

const SvgBackground = () => {
    return (  
        <svg css={svg} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="450" height="272.277" viewBox="0 0 450 272.277">
            <defs>
            <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                <stop offset="0" stopColor="#ee0979"/>
                <stop offset="1" stopColor="#ff6a00"/>
            </linearGradient>
            </defs>
            <path id="sound-wave" d="M450,108.338a141.888,141.888,0,0,0-72.6,3.388A134.3,134.3,0,0,0,346.8,125.6c-8.76,5.612-16.2,13.341-26.64,16.624-9.84,3.071-19.56.953-28.68-2.859-16.92-7.094-33.48-15.776-52.32-8.788-17.04,6.247-28.08,21.282-39.84,33.141-10.32,10.376-23.16,20.012-39.48,20.753-30.6,1.482-47.4-25.094-66.6-41.612-21.6-18.529-51.6-33.882-82.56-27C6.84,116.7,3,117.974,0,120.3V-87.75H450V108.338Z" transform="translate(0 87.75)" fill="url(#linear-gradient)"/>
        </svg>
    );
}
 
export default SvgBackground;