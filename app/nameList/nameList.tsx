import { getAllNames } from "~/utils/NameUtils"

export function NameList(){

    const allNames = getAllNames()


    return (
    <div>
        <p>List of pet names</p>

        <ul>
            {allNames.map(namn => (
                <li key={namn}>{namn}</li>
            ))}
        </ul>



    </div>
    )
}