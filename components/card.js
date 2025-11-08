import styles from "../styles/card.module.css"

export default function Card ({ title, description, blue }) {
    return (
        <div className={blue ? styles.cardBlue : styles.cardGreen}>
            <p>{description}</p>
            <h2>{title}</h2>
        </div>
    )
}