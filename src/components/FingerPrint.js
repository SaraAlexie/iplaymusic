/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { IoIosFingerPrint } from "react-icons/io";
import colors from './Colors';
import { useTheme } from '@emotion/react';


const FingerPrint = () => {

    const theme = useTheme()

    const fingerPrint = css`
        color: white;
        background-color: ${colors.primary};
        border: solid 0.1em ${theme.fingerprint};
        border-radius: 50%;
        height: 75px;
        width: 75px;
    `

    const printSection = css`
        text-align: center;
        margin-top: 2em;
    `

    const printText = css`
        color: ${theme.text};
        font-size: 0.9375em;
    `

    return (
        <>
        <section css={printSection}>
            <div>
                <IoIosFingerPrint css={fingerPrint} />
                <p css={printText}>One-Touch Login</p>
            </div>
        </section>
        </>
    );
}
 
export default FingerPrint;