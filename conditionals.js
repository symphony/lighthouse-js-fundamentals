/// tinker file for testing conditionals
// set vars
const raining = true;
const temperature = -1.9;

// decide if umbrella
if (raining) {
  console.log("Don't forget your umbrella!");
}

// determine suitable clothing based on temperature
if (temperature < 0) {
    console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
    console.log("Short sleeves won't cut it!");
} else {
    console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
