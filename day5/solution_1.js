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

function oppositesImplode(char1, char2) {
  return char1.toLowerCase() === char2.toLowerCase() && char1 !== char2
}

// console.log(oppositesImplode('a','A'))
// console.log(oppositesImplode('a','a'))