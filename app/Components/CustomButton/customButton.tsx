import styles from "./customButton.module.css"

export interface CustomButton {
    buttonMessage: string,
    onClick: () => void
}

export function CustomButton ({buttonMessage, onClick}: CustomButton){

    return (
        <button onClick={onClick} className={styles.btn}>{buttonMessage}</button>
    )

}