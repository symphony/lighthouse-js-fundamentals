// code for photography graphing challenge

// the order of moves
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
  // declare final array
  let newPosition = [0,0]

  // check direction and update position
  for (const move of moves) {
    if (move === 'east') {
      newPosition[0] ++;
    }
    else if (move === 'west') {
      newPosition[0] --;
    }
    else if (move === 'north') {
      newPosition[1] ++;
    }
    else if (move === 'south') {
      newPosition[1] --;
    }
  }
  return newPosition;
}

console.log(finalPosition(moves));