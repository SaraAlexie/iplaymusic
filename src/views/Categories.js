/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import CategoryCard from '../components/CategoryCard';
import Menu from '../components/Menu';
import { AuthContext } from "../contexts/AuthContext";
import Heading from '../components/Heading';


const Categories = () => {

    const { authToken } = useContext(AuthContext)
    const [categories, setCategories] = useState();

    useEffect(() => {
        if (authToken) {
            axios("https://api.spotify.com/v1/browse/categories?country=DK", {
                headers: {
                    "Authorization": "Bearer " + authToken.access_token
                }
            })
            .then(result => setCategories(result.data.categories.items))
        }
        
    }, [authToken]);

    //categories && console.log(categories);

    const categoriesList = css`
        list-style: none;
        text-align: center;
        padding: 0;
        margin: 0;
    `

    return (

        <>
            <Menu title="CATEGORIES" />
            <Heading>Categories</Heading>
            <ul css={categoriesList}>
                { categories?.map(category => (
                    <CategoryCard name={category.name}
                        key={category.id}
                        id={category.id}
                    />
                ))}
                
                
            </ul>
        </>
    );
}
 
export default Categories;


/*

*/