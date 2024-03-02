import styles from './SectionCards.module.css'

function SectionCards (props) {
    return (
        <div className={styles.section_cards}>{props.children}</div>
    )
}


export default SectionCards