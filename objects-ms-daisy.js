// variables
const cars = [
  {
    time: 1568329654807,
    speed: 40
  },
  {
    time: 1568329821632,
    speed: 42
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

// new speed function
const carPassing = function(cars, speed) {
  console.log(cars); // print before
  cars.push({ "time":Date.now(), "speed":speed }) // push new speed
  console.log(cars); // print after
  return cars;
}

carPassing(cars, speed)