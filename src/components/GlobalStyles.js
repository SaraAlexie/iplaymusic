/** @jsxImportSource @emotion/react */
import { Global, css, useTheme } from '@emotion/react'
import { useLocation } from '@reach/router';


const GlobalStyles = () => {

    const theme = useTheme();
    const location = useLocation();
  
    return (
      <Global styles={css`
          #root {
            background-color: ${location.pathname === "/" ? theme.login : theme.body } ;
            color: ${theme.text};
            min-height: 100vh;
            padding: 0.25em 0.25em 5em;
            box-sizing: border-box;
            transition: all 0.25s linear;
          }
        `} ></Global>
    )
}

export default GlobalStyles