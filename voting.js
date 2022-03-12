// code for voting station challenge
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre'],
];

// Function to qualify stations
const chooseStations = function (stationList) {
  let goodStations = [];

  // iterate through whole station list
  for (const station of stationList) {
  // check both capacity and venue
    if (station[1] >= 20) {
      if (station[2] === "school" || station[2] === "community centre") {
        goodStations.push(station[0]); // add station name if passed
      }
    }
  }
  return goodStations;
}

console.log(chooseStations(stations));

