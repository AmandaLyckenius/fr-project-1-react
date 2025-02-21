import { useState } from "react";
import { generateNameByGender } from "~/utils/NameUtils";
import { CustomButton } from "~/Components/CustomButton/customButton";
import styles from "./nameGenerator.module.css"
import { Header } from "../Header/header";

export function NameGenerator(){

 
    const [randomPetName, setRandomPetName] = useState<string>("")

    
    function setRandomName (gender: "female" | "male" | "neutral"){
        const generatedName = generateNameByGender(gender)
        setRandomPetName(generatedName)
    }
      
    
    return (
        <div>

            <Header headerText={"PET NAMES"}></Header>


            <div className={styles.customButtonContainer}>
            <CustomButton onClick={() => setRandomName("female")} buttonMessage="Generate female name"></CustomButton>
            <CustomButton onClick={() => setRandomName("male")} buttonMessage="Generate male name"></CustomButton>
            <CustomButton onClick={() => setRandomName("neutral")} buttonMessage="Generate neutral name"></CustomButton>

            </div>
      

            <p className={styles.randomNameText}>{randomPetName}</p>


      
        </div>
    )
    
    



   
}