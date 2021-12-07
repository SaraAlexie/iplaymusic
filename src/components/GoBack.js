/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import colors from './Colors'
import { FaChevronLeft } from "react-icons/fa";
import { Link } from '@reach/router';
import { useTheme } from '@emotion/react';


const GoBack = () => {

    const theme = useTheme()

    const goBack = css`
        color: ${colors.secondary};
    `

    return (
        <>
            <Link to={'/'} css={goBack} style={{color:theme.text}}>
                <FaChevronLeft />
            </Link>
        </>
    );
}
 
export default GoBack;