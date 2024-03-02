import { Link } from 'react-router-dom';

import { useState } from 'react';

import styles from './NavBar.module.css';

import logo from '../../img/Logo-WebSiteReact-2.png'

import { FiMenu} from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

function NavBar() {


    const [isActive, setIsActive] = useState(false);

    const handleClick = event => {
        setIsActive(current => !current)
    }

    return (
        <header>
            <nav className={styles.navbar} >
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt='Menu-Recipe'></img>
                    </Link>
                    <button onClick={handleClick} className={`${isActive ? styles.navBtn : styles.navBtnDisable} ${styles.navBtnClose}`}>
                        <FaTimes className={styles.menu} />  
                    </button>
                    <ul className={`${styles.list} ${isActive ? styles.active : ''}`}>
                        
                        <li className={styles.item}><Link to="/">Home</Link></li>
                        <li className={styles.item}><Link to="/recipes">Recipes</Link></li>
                        <li className={styles.item}><Link to="/about">About</Link></li>
                        <li className={styles.item}><Link to="/policity">Policity</Link></li>
                        <li className={styles.item}><Link to="/new_recipe" className={styles.edit_link}>New Recipe</Link></li>
                        
                    </ul>

                    <button onClick={handleClick} className={`${isActive ? styles.navBtnDisable : styles.navBtn}`}>
                         <FiMenu className={styles.menu} />  
                    </button>
            </nav>
        </header>
    )
}


export default NavBar;