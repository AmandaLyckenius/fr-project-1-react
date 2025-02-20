import { useState } from "react";
import { generateNameByGender } from "~/utils/NameUtils";
import { CustomButton } from "~/CustomButton/customButton";

export function NameGenerator(){

 
    const [randomPetName, setRandomPetName] = useState<string>("")

    
    function setRandomName (gender: "female" | "male" | "neutral"){
        const generatedName = generateNameByGender(gender)
        setRandomPetName(generatedName)
    }
      
    
    return (
        <div>
            <p>Pet name generator</p>



            <CustomButton onClick={() => setRandomName("female")} buttonMessage="Generate female name"></CustomButton>
            <CustomButton onClick={() => setRandomName("male")} buttonMessage="Generate male name"></CustomButton>
            <CustomButton onClick={() => setRandomName("neutral")} buttonMessage="Generate neutral name"></CustomButton>

            <p>{randomPetName}</p>


      
        </div>
    )
    
    



   
}