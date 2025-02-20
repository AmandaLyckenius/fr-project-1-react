import { getAllNames } from "~/utils/NameUtils"

export function NameList(){

    const allNames = getAllNames()


    return (
    <div>
        <p>Navigated succesfully to Name List Page</p>

        <ul>
            {allNames.map(namn => (
                <li key={namn}>{namn}</li>
            ))}
        </ul>



    </div>
    )
}