/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { FaRegUserCircle } from "react-icons/fa";
import { GoKey } from "react-icons/go";
import { useTheme } from '@emotion/react';


const FillerLogin = () => {

    const theme = useTheme()

    const style = css`
        margin: 2em;
    `

    const loginText = css`
        font-weight: bold;
        padding-left: 0.3em;
    `

    const flex = css`
        display: flex;
        justify-content: space-between;
        border-bottom: solid 0.1875em ${theme.text};
        font-size: 0.9375em;
        margin-bottom: 1.6em;
    `

    return (
        <>
            <section css={style}>
                <div>
                    <p css={loginText}>Username</p>
                    <p css={flex}>Enter your username <span> <FaRegUserCircle /> </span></p>
                </div>
                <div>
                    <p css={loginText}>Password</p>
                    <p css={flex}>Enter your password <span> <GoKey /> </span></p>
                </div>
            </section>
        </>
    );
}
 
export default FillerLogin;