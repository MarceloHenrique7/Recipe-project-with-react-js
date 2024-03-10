import { useNavigate } from 'react-router-dom'

import styles from './NewRecipe.module.css'
import RecipeForm from '../project/RecipeForm.js';



function NewRecipe () {

    const navigate = useNavigate()

    function createPost (recipe) {
        
        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recipe),
        }).then((resp) => {
            resp.json();
        }).then((data) => {
            console.log(data)
            const state = { message: 'Projeto Criado com sucesso!' };
            navigate('/projects', {state})
        })
        

    }

    return (
        <div className={styles.recipe_form_container}>
            <h1>Create your recipe</h1>  
            <p>create your recipe and show for the peoples your talent.</p>
            <RecipeForm handleSubmit={createPost} btnText="Criar Projeto"/>
        </div>
    )
}



export default NewRecipe;