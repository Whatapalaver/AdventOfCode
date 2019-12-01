// Heavily assisted by MK Hill https://github.com/mk-hill/TrialAndError/blob/master/challenges/advent2018/day14.js
const puzzleInput = 894501;

// Use spread operator to convert sum of two numbers to array of two numbers characters.
// Use map to convert back to number
const newRecipes = (x, y) => [...`${x+y}`].map(char => Number(char))

// console.log(newRecipes(2,3))

function scoreNextTen(practiceRecipes = puzzleInput) {
  let totalRecipes = practiceRecipes + 10;
  const recipes = [3, 7]; // start with the 2 seeded recipes
  const elves = [{ currentScore: 3, currentIndex: 0 }, { currentScore: 7, currentIndex: 1 }];
  // console.log(elves)
  while (recipes.length < totalRecipes) {
    let nextRecipe = newRecipes(elves[0].currentScore, elves[1].currentScore)
    nextRecipe.forEach(recipe => recipes.push(recipe));
    elves.forEach((elf) => {
      elf.currentIndex = (elf.currentScore + elf.currentIndex + 1) % recipes.length;
      elf.currentScore = recipes[elf.currentIndex];
    });
  }
  return recipes.slice(practiceRecipes, totalRecipes).join('');
}

// Part 2

function getNumberOfRecipesBefore(practiceRecipes = puzzleInput) {
  const recipes = [3, 7]; // start with the 2 seeded recipes
  const elves = [{ currentScore: 3, currentIndex: 0 }, { currentScore: 7, currentIndex: 1 }];
  const targetLength = practiceRecipes.toString().length + 1
  // console.log(practiceRecipes, ' length: ', practiceRecipes.toString().length)
  
  do {
    let nextRecipe = newRecipes(elves[0].currentScore, elves[1].currentScore)
    nextRecipe.forEach(recipe => recipes.push(recipe));
    elves.forEach((elf) => {
      elf.currentIndex = (elf.currentScore + elf.currentIndex + 1) % recipes.length;
      elf.currentScore = recipes[elf.currentIndex];
    });
    // console.log('slice: ', recipes.slice(-targetLength))
  }
  while (
    !recipes
      .slice(-targetLength)
      .join('')
      .includes(practiceRecipes, 0)
  ) 
  console.log('Recipes before: ', recipes.length - practiceRecipes.toString().length)
  return recipes.length - practiceRecipes.toString().length

}

/// TESTS

// - If the Elves think their skill will improve after making 9 recipes: 
// - the scores of the ten recipes after the first nine on the scoreboard would be 5158916779 (highlighted in the last line of the diagram).
// - After 5 recipes, the scores of the next ten would be 0124515891.
// - After 18 recipes, the scores of the next ten would be 9251071085.
// - After 2018 recipes, the scores of the next ten would be 5941429882.

console.log(scoreNextTen(9) === '5158916779') // '5158916779'
console.log(scoreNextTen(5) === '0124515891')  // '0124515891'
console.log(scoreNextTen(18) === '9251071085')  // '9251071085'
console.log(scoreNextTen(2018) === '5941429882') // '5941429882'
console.log(scoreNextTen(894501)) //2157138126

console.log(getNumberOfRecipesBefore('51589') === 9) 
console.log(getNumberOfRecipesBefore('01245') === 5) 
console.log(getNumberOfRecipesBefore('92510') === 18)
console.log(getNumberOfRecipesBefore('59414') === 2018)
console.log(getNumberOfRecipesBefore('894501')) //20365082
