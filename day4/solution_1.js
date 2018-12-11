
//import the box id data
const data = require('./input');
//convert string to sorted array
const dataArray = data.strData.split(/\n/).sort();

// console.log(dataArray);

// PART 1

// Aim for events object in format {guard_id: [[minuteAsleep, minuteAwake]]}
let records = {};
let minutesAsleep = 0;
let minuteAsleep = null;
let minuteAwake = null;
let guardId = '';

function prepareRecords(){
  dataArray.forEach(record => {
    let timestamp = getTime(record)
    if (guardExists(record)) {
      guardId = getGuardId(record)
      records[guardId] = records[guardId] || []
    }
    if (fallsAsleep(record)) {
      minuteAsleep = timestamp.getMinutes()
    }
    if (wakesUp(record)) {
      minuteAwake = timestamp.getMinutes()
      minutesAsleep = minuteAwake - minuteAsleep
      records[guardId].push([minuteAsleep, minuteAwake, minutesAsleep])
    }
  })
console.log(records)
return records;
  
}
prepareRecords()

function sleepiestGuard() {
  let records = prepareRecords();

}


// Helpers


// returns the guard Id if it exists
function getGuardId(string) {
  let regex = /\B\#\w+/;
  // match return an array - index 0 is the matched string
  guardId = string.match(regex)[0].replace("#",'');
  // console.log(guardId)
  return guardId
}

function getTime(timeString) {
  const time = timeString.split('[')[1].split(']')[0]
  const dateTime = new Date(time)
  return dateTime
}

// a boolean test for Guard existence
function guardExists(string) {
  let answer = string.match('Guard')
  exists = answer !== null
  return exists
}

// a boolean test for Fall Asleep existence
function fallsAsleep(string) {
  let answer = string.match('asleep')
  asleep = answer !== null
  return asleep
}

// a boolean test for Wake Up existence
function wakesUp(string) {
  let answer = string.match('wakes')
  awake = answer !== null
  return awake
}

// guardExists('[1518-02-20 23:47] Guard #101 begins shift')
// getTime('[1518-02-20 23:47] #101 begins shift')

module.exports = {
  getGuardId
}
