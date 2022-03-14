/// tinker file for testing conditionals
// set vars
const raining = true;
const temperature = -1.9;
const isCitizen = true;
const age = 26;

// decide if umbrella
if (raining) {
  console.log("Don't forget your umbrella!");

} else if (!raining) {
    console.log("Leave your umbrella at home!");
}

// determine suitable clothing based on temperature
if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea..");

} else if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");

} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");

} else { // temp above 15
    console.log("Short sleeves are fine.");
}

// Outfit is decided
console.log("Now you're ready to go outside!");

// Check if eligible to vote
if (isCitizen && age > 18) {
    console.log("You are elegible to vote");
}