/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { GiSoundWaves } from "react-icons/gi";
import { IoIosMicrophone } from "react-icons/io";
import { VscColorMode } from "react-icons/vsc";
import { GiCat } from "react-icons/gi";
import { MdWifiTethering } from "react-icons/md";
import colors from './Colors';
import { Link, useLocation } from '@reach/router';
import { useTheme } from '@emotion/react';


const Footer = ({toggleDarkMode}) => {

    const location = useLocation();
    const theme = useTheme();

    const footer = css`
        display: ${location.pathname === "/" ? "none" : "flex"};
        box-sizing: border-box;
        background-color: ${theme.body};
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 4.0625em;
        justify-content: space-between;
        padding: 0 1.2em;
        box-shadow: 0.125em 0.125em 0.5em 0.15em #888888;

        button{
            background-color: transparent;
            border: none;
        }
    `

    const footerIcon = css`
        color: ${colors.secondary};
        font-size: 1.8em;
        font-weight: bold;
        padding-top: 0.6em;
    `

    const footerIconFeatured = css`
        color: ${colors.secondary};
        font-size: 3em;
        font-weight: bold;
        padding-top: 0.1em;
    `

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
            <nav css={footer}>
                <Link to="/newreleases" css={footerIcon}>
                    <span> <GiSoundWaves style={{fill:"url(#gradientColor)"}} /> </span>
                </Link>
                <Link to="/playlist/37i9dQZF1DWXJfnUiYjUKT" css={footerIcon}>
                    <span> <IoIosMicrophone style={{fill:"url(#gradientColor)"}} /> </span>
                </Link>
                <Link to="/featured" css={footerIconFeatured}>
                    <span> <MdWifiTethering style={{fill:"url(#gradientColor)"}} /> </span>
                </Link>
                <button css={footerIcon} onClick={toggleDarkMode}> <VscColorMode style={{fill:"url(#gradientColor)"}} /> </button>
                <Link to="/categories" css={footerIcon}>
                    <span> <GiCat style={{fill:"url(#gradientColor)"}} /> </span>
                </Link>
            </nav>
        </>
    );
}
 
export default Footer;