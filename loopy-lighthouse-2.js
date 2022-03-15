// loopylighthouse challenge
function loopyLighthouse(range, multiples, words) {
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[1] === 0) { // check larger number first since there should be less cases ie. less calculations
      if (i % multiples[0] === 0) { // check against both only if first check passes
        console.log(words[0] + words[1]); // success
      } else {
        console.log(words[1]);
      }
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);