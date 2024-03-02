import { useState, useEffect } from 'react';

import styles from './Home.module.css'

import CategoryCard from '../category/CategoryCard.js'
import Container from '../layout/Container.js';
import SectionCards from '../layout/SectionCards.js';

function Home () {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        
        fetch('http://localhost:5000/Categories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        }).then(resp => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className={styles.home_container}>
            <h1>Choose Your Favorite <span>Category</span></h1>
            
            <SectionCards>

                {categories.length > 0 &&
                categories.map((category) => (

                    <CategoryCard 
                        id={category.id}
                        name={category.name}
                        path_image={category.path_image}
                        key={category.id}
                    />

                    
                ))}
            </SectionCards>
            
        </div>
    )
}


export default Home;

