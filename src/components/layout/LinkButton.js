import styles from './LinkButton.module.css'

function LinkButton ({to, text}) {
    return (
        <a className={styles.link_button} href={to}>{text}</a>
    )
}   


export default LinkButton;