/// age calculator challenge
const ageCalculator = function(name, yearBorn, currentYear) {
  return name + " is " + (currentYear - yearBorn) + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));