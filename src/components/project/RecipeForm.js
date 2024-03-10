import { useEffect, useState } from 'react'
import styles from './RecipeForm.module.css'

import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';
import Ingredients from '../form/Ingredients.js';
import ListIngredients from '../form/ListIngredients.js';

function RecipeForm ({ handleSubmit, btnText, ProjectData }) {

    const [categories, setCategories] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [recipe, setRecipe] = useState(ProjectData || [])

    useEffect(() => {
        const endpoint = "http://localhost:5000/categories"
        fetch(endpoint, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {

            if (!res) {
                throw new Error("Erro na requisição")
            }
            return res.json()
        }).then((data) => {
            setCategories(data)
        }).catch((err) => {console.log(err)})

    },[])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(recipe)
    }

    function handleChange(e) {
        setRecipe({ ...recipe, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        
        setRecipe({ ...recipe, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }
    function handleIngredients (ingredient) {

        setIngredients([...ingredients, ingredient])
        console.log(ingredients)

    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input type="text" text="Name Of Recipe" name="name" placeholder="Insert the name of recipe" handleOnChange={handleChange} value={recipe.name}/> 
            <Input type="text" text="Owner" name="owner" placeholder="The name of owner" handleOnChange={handleChange} value={recipe.owner? recipe.owner : ''}/>
            <Input type="text" text="Description" name="description" placeholder="brief description" handleOnChange={handleChange} value={recipe.description? recipe.description : ''}/>
            <Input type="text" text="Image" name="image" placeholder="url of image" handleOnChange={handleChange} value={recipe.image? recipe.image : ''}/>
            <Ingredients handleSubmit={handleIngredients}/>
            <ListIngredients ingredients={ingredients}/>
       
            <Select name={"category_id"} text={"Select the category"} options={categories} handleOnChange={handleCategory} value={recipe.category ? recipe.category.id : ''}/>
            <SubmitButton text={btnText}/>
        </form>
    )
}



export default RecipeForm;