//import the box id data
const data = require('./data');
//convert string to array
const dataArray = data.strData.split(/\s/);

let doublesCount = 0;
let triplesCount = 0;

function checksum(array){
  dataArray.forEach(id => {
    let duplicates = extractRepeatChars(id);
    let lengths = convertToLength(duplicates);
    if (includesDoubles(lengths)) {doublesCount ++} 
    if (includesTriples(lengths)) {triplesCount ++}
  })

  let checksum = doublesCount * triplesCount;
  console.log(checksum);
  return checksum;
}

function extractRepeatChars(string){
  //convert string to array of duplicated characters
  let duplicateArray = string.split("").sort().join("").match(/(.)\1+/g);
  //faff to deal with error that can arise if id's have no duplicated characters
  if (duplicateArray != null) {
    return duplicateArray
  } else {
    return [''];
  }
}

function convertToLength(array){
  //converts array of duplicated characters to array of duplicate lengths
  let lengthsArray = array.map(word => {
  return word.length
  }) 
  return lengthsArray
}

function includesDoubles(array) {
  return array.includes(2)
}

function includesTriples(array) {
  return array.includes(3)
}

checksum(dataArray)
