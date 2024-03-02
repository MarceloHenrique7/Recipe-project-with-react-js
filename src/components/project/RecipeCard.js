import { Link } from 'react-router-dom'

import styles from './RecipeCard.module.css'

function RecipeCard ({id, owner, name, description, image, category, ingredients, instructions }) {

    return (
        <div className={styles.recipe_card}>
            <img src={image} />
            <h4>{name}</h4>

            <div className={styles.recipe_info}>
                <p>
                    <span>Category: </span>{category}
                </p>
                <p>
                    <span>Onwer: </span>{owner}
                </p>
            </div>
            

        </div>
    )
}


export default RecipeCard;