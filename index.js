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
