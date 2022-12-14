import styled from "@emotion/styled";
import colors from "./Colors";

export default styled.h1`
    font-family: 'Poppins', sans-serif;
    margin-left: 1em;
    background: ${colors.gradientLeft};
    background: -webkit-linear-gradient(to right, ${colors.gradientLeft} 0%, ${colors.gradientRight} 40%), ${colors.gradientLeft} 100%;
    background: -moz-linear-gradient(to right, ${colors.gradientLeft} 0%, ${colors.gradientRight} 40%), ${colors.gradientLeft} 100%;
    background: linear-gradient(to right, ${colors.gradientLeft} 0%, ${colors.gradientRight} 40%), ${colors.gradientLeft} 100%;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`