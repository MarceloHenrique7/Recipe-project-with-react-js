import { useEffect, useState } from 'react'
import styles from './RecipeForm.module.css'

import Input from '../form/Input.js';
import Select from '../form/Select.js';
import SubmitButton from '../form/SubmitButton.js';

function RecipeForm ({ handleSubmit, btnText, ProjectData }) {

    const [categories, setCategories] = useState([])
    const [recipe, setRecipe] = useState(ProjectData || [])

    useEffect(() => {
        const endpoint = "http://localhost:5000/Categories"
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

    function handleOnChange(e) {
        setRecipe({ ...recipe, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setRecipe({ ...recipe, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>

            <Input type="text" text="Name Of Recipe" name="name" placeholder="Insert the name of recipe" value={recipe.name}/> 
            <Input type="text" text="Owner" name="owner" placeholder="The name of owner" value={recipe.owner? recipe.owner : ''}/>

            <Select name={"category_id"} text={"Select the category"} options={categories} handleOnChange={handleCategory} value={recipe.category? recipe.category.id : ''}/>
            <SubmitButton btnText={btnText}/>
        </form>
    )
}



export default RecipeForm;