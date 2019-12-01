const fs = require('fs');

// PART 1

function day1part1() {
  fs.readFile('./frequency.txt', (err, data) => {
    const frequencyShift = data.toString();
    const frequencyShiftArray = frequencyShift.split('\n').map(Number);
    let sum = frequencyShiftArray.reduce((a, b) => a + b, 0);
    console.log(sum);
    return sum;
  })
}

// PART 2

function day1part2() {
  fs.readFile('./frequency.txt', (err, data) => {
    const frequencyShift = data.toString();
    const frequencyShiftArray = frequencyShift.split(/\s/).map(Number);
    let cumulativeFrequencyArray = [0];
    let currentFrequency = 0;
    let repeated = false;
  
    while (repeated === false) {
      frequencyShiftArray.forEach(frequencyChange => {
        currentFrequency += frequencyChange;
        if (cumulativeFrequencyArray.includes(currentFrequency) && repeated === false) {
          console.log('Repeat of: ', currentFrequency);
          repeated = true;
        } else {
          cumulativeFrequencyArray.push(currentFrequency)
        }
      })
    }
  }
)};

// day1part1()
day1part2()

