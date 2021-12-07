/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react';
import colors from './Colors';
import SubcategoryList from './SubcategoryList';


const CategoryCard = ({name, id}) => {

    const [isOpen, setIsOpen] = useState(false);

    const collapsible = css`
        border: none;
        color: white;
        background-color: ${colors.primary};
        width: 24em;
        height: 3.375em;
        border-radius: 0.5em;
        margin-bottom: 0.5em;
        font-weight: bold;
    ` 

    return (

        <>
            <li key={name}>
                <button css={collapsible} onClick={() => setIsOpen(!isOpen)}>{name}</button>
                { isOpen && <SubcategoryList key={id} id={id}/> }
            </li>
        </>
    );
}
 
export default CategoryCard;