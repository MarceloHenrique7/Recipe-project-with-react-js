import styles from './ListIngredients.module.css'

function ListIngredients({ ingredients }) {
    return (
        <div className={styles.content}>
            { ingredients.map((ingredient, index) => (
                <div className={styles.box_ingredient} key={index}>
                    <h1>{ingredient.name}</h1>
                    <ul className={styles.list}>
                        <li className={styles.item}>Name: {ingredient.name}</li>
                        <li className={styles.item}>Quantity: {ingredient.quantity}</li>
                        <li className={styles.item}>Unit: {ingredient.unit}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
}

export default ListIngredients;
