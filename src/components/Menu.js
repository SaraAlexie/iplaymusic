/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import GoBack from './GoBack'
import Search from './Search';

const Menu = (props) => {

    const menuStyle = css`
        height: 2em;
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: 0.5em 1em;
        box-sizing: border-box;
        //background-color: white;
        align-items: center;
        position: relative;
    `

    const menuText = css`
        text-align: center;
    `

    return (
        <>
            <header css={menuStyle}>
                <GoBack />
                <p css={menuText}>{props.title}</p>
                <Search />
            </header>
        </>
    );
}
 
export default Menu;