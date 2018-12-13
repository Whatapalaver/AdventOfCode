const data = require('./data');

const polymerString = data.day5
const polmerArray = polymerString.split('')

// console.log(polmerArray)

function returnResidueSize(array) {
  return returnResidue(array).length
}

console.log(returnResidueSize(polmerArray))

function returnResidue(array) {
  let residue = []
  array.forEach((unit) => {
    let latestResidueUnit = residue[residue.length - 1]
    // push the first unit to the residue
    if (!latestResidueUnit) { 
      return residue.push(unit) 
    };
    // test for negating pairs and destroy
    if (oppositesImplode(latestResidueUnit, unit)) { 
      return residue.pop() 
    };
    // otherwise add unit to residue
    return residue.push(unit)
  })
  return residue
}

// Part 1 Helpers

function oppositesImplode(char1, char2) {
  return char1.toLowerCase() === char2.toLowerCase() && char1 !== char2
}

// Part 2

function shortestPolymer() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let lengths = []
  alphabet.forEach((letter) => {
    let regex = new RegExp(letter, "ig")
    let tempArray = polymerString.replace(regex, '').split('')
    lengths.push(returnResidueSize(tempArray))
  })
  console.log(Math.min(...lengths))
  return Math.min(...lengths)
}

shortestPolymer()

// Part 2 Helpers


