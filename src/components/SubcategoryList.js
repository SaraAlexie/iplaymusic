/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import colors from './Colors';
import { Link } from '@reach/router';
import { FiChevronRight } from "react-icons/fi";
import { useTheme } from '@emotion/react';


const SubcategoryList = ({id}) => {

    const { authToken } = useContext(AuthContext)
    const [subCategories, setSubCategories] = useState();
    const theme = useTheme();

    useEffect(() => {
        if (authToken) {
            axios(`https://api.spotify.com/v1/browse/categories/${id}/playlists?country=DK`, {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setSubCategories(result.data.playlists.items))
        }
    }, [authToken, id]);

    //subCategories && console.log(subCategories);

    const subCatLink = css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 2em 0 1em;
        color: ${colors.secondary};
        text-decoration: none;
        font-size: 0.85em;
    `

    const subCatTitle = css`
        color: ${theme.text};
        text-align: left;
        padding-left: 2em;
    `

    return (  
        <>
            { subCategories?.map(subcategory => (
                <Link css={subCatLink} style={{color:theme.text}} key={subcategory.id} id={subcategory.id} to={`/playlist/${subcategory.id}`}>
                    <p id={subcategory.id} css={subCatTitle} >
                        {subcategory.name}
                    </p>
                    <FiChevronRight />
                </Link>
            ))}
        </>
    );
}
 
export default SubcategoryList;