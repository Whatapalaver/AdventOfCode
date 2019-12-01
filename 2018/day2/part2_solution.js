//import the box id data
const data = require('./data');
//convert string to array
const dataArray = data.strData.split(/\s/);

let similar = []
let common = []

function test(array){
  array.forEach(id => {
    for (let i = 0; i < array.length -1; i++) {
      compareStrings(id, array[i+1])
    }
  })
  commonCharacters(similar)
}

function compareStrings(str1, str2){
  let similarCount = 0
  const length = 26
  for (let i = 0; i < length; i++) {
    if (str1.charAt(i) === str2.charAt(i)) {
      similarCount ++
    }
  }
  if (similarCount === length - 1) {
    similar.push(str1, str2)
  }
}

function commonCharacters(similar) {
  let length = similar[0].length;
  for (let i = 0; i <= length; i++) {
    if (similar[0].charAt(i) === similar[1].charAt(i)) {
      common.push(similar[0].charAt(i))
    }
  }
  console.log(common.join(''))
  return common.join('')
}



test(dataArray)

