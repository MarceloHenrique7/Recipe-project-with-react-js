import styles from './CategoryCard.module.css';


function CategoryCard ({id, name, path_image}) {

    return (
        
        <div className={styles.category_card}>

            <div className={styles.content_info}>
                <img src={path_image} className={styles.image}></img>
                <div className={styles.box_text}>
                    <h2>{name}</h2>
                    <a href='#'>See Recipes</a>
                </div>  
            </div>

        </div>

    )
}

export default CategoryCard;