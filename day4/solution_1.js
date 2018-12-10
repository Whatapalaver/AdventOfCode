//import the box id data
const data = require('./input');
//convert string to sorted array
const dataArray = data.strData.split(/\n/).sort();

// console.log(dataArray);

// PART 1

// Aim for array of events in format {date}, { guard_id }, [{ sleep }, or { wake }]

// Helpers

// returns the guard Id if it exists
function getGuardId(string) {
  let regex = /\B\#\w+/;
  // match return an array - index 0 is the matched string
  if (guardExists(string)) {
    guardId = string.match(regex)[0].replace("#",'')
    console.log(guardId)
    return guardId
  }
}

function getTime(timeString) {
  const time = timeString.split('[')[1].split(']')[0]
  const dateTime = new Date(time)
  console.log(dateTime)
}

// a boolean test for Guard existence
function guardExists(string) {
  let answer = string.match('Guard')
  guardExists = answer !== null
  return guardExists
}

// a boolean test for Fall Asleep existence
function fallsAsleep(string) {
  let answer = string.match('asleep')
  fallsAsleep = answer !== null
  return fallsAsleep
}

// a boolean test for Wake Up existence
function wakesUp(string) {
  let answer = string.match('wakes')
  wakesUp = answer !== null
  return wakesUp
}

// guardExists('[1518-02-20 23:47] Guard #101 begins shift')
getTime('[1518-02-20 23:47] #101 begins shift')