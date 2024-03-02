import { useState, useEffect } from 'react';
import styles from './Recipes.module.css';

import Container from '../layout/Container.js'
import RecipeCard from '../project/RecipeCard.js';
import LinkButton from '../layout/LinkButton.js';
import SectionCards from '../layout/SectionCards.js';

function Recipes () {

    const [recipes, setRecipes] = useState([])

    

    useEffect(() => {
        fetch('http://localhost:5000/recipes', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then((data) => {
            setRecipes(data)
        })
    }, [])

    return (
        <div className={styles.recipe_container}>

            <div className={styles.title_container}>
                <h1>All Recipes</h1>
                <LinkButton to="/new_recipe" text="Create recipe"/>
            </div>
        
            <SectionCards>
                {recipes.length > 0 &&
                    recipes.map((recipe) => (

                    <RecipeCard 
                        id={recipe.id} 
                        owner={recipe.owner} 
                        name={recipe.name}
                        description={recipe.description}
                        image={recipe.image}
                        category={recipe?.category?.name}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                        key={recipe.id}
                    />

                ))
                }
            </SectionCards>
        </div>
    )
}


export default Recipes;