const fs = require('fs');

function day1() {
  fs.readFile('./frequency.txt', (err, data) => {
    const frequencyShift = data.toString();
    const frequencyShiftArray = frequencyShift.split('\n').map(Number);
    let sum = frequencyShiftArray.reduce((a, b) => a + b, 0);
    console.log(sum);
  })
}

day1()