// code your solution here
// Implement a function called saturdayFun
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

// Implement a function called wrapAdjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  }
}

// Implement a function called mondayWork
const mondayWork = function(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

// Instructions
// To get more practice with first-class functions, this lesson has three tests to pass that require you to write the following functions in the index.js file:

// The receivesAFunction function should:

// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function
// The returnsANamedFunction function should:

// take no arguments
// return a named function
// The returnsAnAnonymousFunction function should:

// take no arguments
// return an anonymous function
// receivesAFunction function
function receivesAFunction(callback) {
  callback();
}
function returnsANamedFunction() {
  function namedFunction() {
  }
  
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return function() {
  };
}
