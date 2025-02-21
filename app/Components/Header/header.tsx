import styles from "./header.module.css"

export interface Header {
    headerText: string
}


export function Header ({headerText}: Header){
    return (<div>
        <h2 className={styles.logoText}>{headerText}</h2>
    </div>
    )
}