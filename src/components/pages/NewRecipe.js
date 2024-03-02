import { UseNavigate } from 'react-router-dom'

import styles from './NewRecipe.module.css'
import RecipeForm from '../project/RecipeForm.js';



function NewRecipe () {
    return (
        <div>

            <RecipeForm />
        </div>
    )
}



export default NewRecipe;