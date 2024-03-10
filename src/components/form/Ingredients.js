import styles from './Ingredients.module.css'
import Input from './Input.js';
import { useEffect, useState } from 'react';


function Ingredients ({ handleSubmit }) {

    const [showFormIngredients, setShowFormIngredients] = useState(false)
    const [chosenIngredients, setChosenIngredients] = useState([])

    function handleOnButton () {
        setShowFormIngredients(!showFormIngredients)
    }


    function handleIngredients (e) {
        e.preventDefault();
        console.log(e.target.value)
        setChosenIngredients({...chosenIngredients, [e.target.name]: e.target.value})
        console.log(chosenIngredients)
    }

    function submit () {
        setShowFormIngredients(!showFormIngredients)
        handleSubmit(chosenIngredients)
    }

    return (
        <div className={styles.container_ingredients}>
            <div className={styles.box_text}>
                <label >Ingredients</label>
                <a className={`${styles.btn} ${showFormIngredients ? styles.btnOff : ''}`} onClick={handleOnButton}>add new ingredient</a>
            </div>

            {showFormIngredients && 

                <div className={styles.form_ingredient}>
                    <Input type="text" text="name" name="name" id="name" placeholder="name of ingredient" handleOnChange={handleIngredients} value={chosenIngredients.nome}/>
                    <Input type="number" text="quantity" name="quantity" id="quantity" placeholder="quantity of ingredient" handleOnChange={handleIngredients} value={chosenIngredients.quantity} />
                    <Input type="text" text="unit" name="unit" id="unit" placeholder="unit of ingredient ex: 300g, 3kg, 1hg" handleOnChange={handleIngredients} value={chosenIngredients.unit} />

                    <div className={styles.box_buttons}>
                        <a className={styles.btn} onClick={submit}>save</a>
                        <a className={`${styles.btn} ${styles.btnCancel}`} onClick={handleOnButton}>cancel</a>
                    </div>
                </div>
            }
        </div>
    )
}


export default Ingredients;