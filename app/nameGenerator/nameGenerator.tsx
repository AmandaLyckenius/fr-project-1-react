import { useState } from "react";
import { generateNameByGender } from "~/utils/NameUtils";


export function NameGenerator(){

 
    const [randomPetName, setRandomPetName] = useState<string>("")

    
    function setRandomName (gender: "female" | "male" | "neutral"){
        const generatedName = generateNameByGender(gender)
        setRandomPetName(generatedName)
    }
      
    
    return (
        <div>
            <p>Navigated succesfully to Name Generator Page</p>

        
            <button onClick={() => setRandomName("female")} >Generate female name</button>
            <button onClick={() => setRandomName("male")}>Generate male name</button>
            <button onClick={() => setRandomName("neutral")}>Generate neutral name</button>

            <p>{randomPetName}</p>


      
        </div>
    )
    
    



   
}