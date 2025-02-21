import { getAllNames } from "~/utils/NameUtils"
import { Header } from "../Header/header"
import style from "./nameList.module.css"

export function NameList(){

    const allNames = getAllNames()


    return (
    <div>

        <Header headerText={"PET NAMES"}></Header>

        <h3 className={style.headline}>List of pet names</h3>

        <ul className={style.listOfNames}>
            {allNames.map((namn: string) => ( 
                <li key={namn}>{namn}</li>
            ))}
        </ul>



    </div>
    )
}