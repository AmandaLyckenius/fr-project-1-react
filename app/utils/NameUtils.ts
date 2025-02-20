const femaleNames = ["Berit", "Bodil", "Selma", "Sally"]
const maleNames = ["Rocky", "Bob", "Kurt", "Olle"]
const neutralNames = ["Fluffy", "Pyret", "Saffran", "Pepsi"]

const lists = {
    female: femaleNames,
    male: maleNames,
    neutral: neutralNames
}

export function getAllNames() {
    const allNames = [...femaleNames, ...maleNames, ...neutralNames] 
   return allNames
}

export function generateNameByGender(gender: "female" | "male" | "neutral") {
  
    const index = Math.floor(Math.random() * lists[gender].length)
    return lists[gender][index]
    
}

