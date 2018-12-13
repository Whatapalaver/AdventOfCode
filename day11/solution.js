
// 1 - Find the fuel cell's rack ID, which is its X coordinate plus 10.
// 2 - Begin with a power level of the rack ID times the Y coordinate.
// 3 - Increase the power level by the value of the grid serial number (your puzzle input).
// 4 - Set the power level to itself multiplied by the rack ID.
// 5 - Keep only the hundreds digit of the power level (so 12345 becomes 3; numbers with no hundreds digit become 0).
// 6 - Subtract 5 from the power level.

function powerLevel(x, y, serialNumber = 4172) {
  // stage 1
  let rackId = x + 10;
  // stage 2-4
  let powerLevelIntermediate = ((rackId * y) + serialNumber) * rackId
  // stage 5-6
  let stage5 = parseInt(powerLevelIntermediate / 100).toString().split('').pop()
  let powerLevel = stage5 - 5
  // console.log(powerLevel)
  return powerLevel;
}

function powerGrid(serialNumber = 4172) {
  const grid = {};
  for (let x = 1; x < 301; x++) {
    for (let y = 1; y < 301; y++) {
      grid[x] = { ...grid[x], [y]: powerLevel(x, y, serialNumber)}
    }
  }
  return grid
}

function threeSquareTotal(serialNumber = 4172) {
  const grid = powerGrid(serialNumber)
  let maxPowerCell = ['x,y', 0] //assuming max power will exceed 0
  for (let x = 1; x < 299; x++) {
    for (let y = 1; y < 299; y++) {
      let totalPower = 0
      for (let xi = 0; xi < 3; xi++) {
        for (let yi = 0; yi < 3; yi++) {
          totalPower += grid[x + xi][y + yi]
        }
      }
      if (totalPower > maxPowerCell[1]) {
        maxPowerCell = [`${x}, ${y}`, totalPower];
      }
    }
  }
  console.log(maxPowerCell)
  return maxPowerCell
}

threeSquareTotal()