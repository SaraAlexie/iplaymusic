/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const spinner = css`
    margin: 0 auto;
    width: 4em;
    height: 4em;
    border-width: 0.25em;
    border-style: solid;
    border-color: grey transparent;
    border-radius: 50%;
    transform: rotate(0deg);
    animation: spin 2s linear infinite;

    @keyframes spin {
    to{
        transform: rotate(360deg);
    }
}
`

const Spinner = () => {
    return ( <div css={spinner}></div> );
}
 
export default Spinner;