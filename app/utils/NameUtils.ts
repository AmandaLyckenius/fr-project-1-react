const femaleNames = ["Berit", "Bodil", "Selma", "Sally", "Doris", "Poppy"]
const maleNames = ["Rocky", "Bob", "Kurt", "Olle", "Frasse", "Samson", "Lasse", "Mumin"]
const neutralNames = ["Fluffy", "Pyret", "Saffran", "Pepsi", "Zingo"]

const lists = {
    female: femaleNames,
    male: maleNames,
    neutral: neutralNames
}

export function getAllNames(): string[] {
    const allNames = [...femaleNames, ...maleNames, ...neutralNames] 
   return allNames
}

export function generateNameByGender(gender: "female" | "male" | "neutral") {
  
    const index = Math.floor(Math.random() * lists[gender].length)
    return lists[gender][index]
    
}

