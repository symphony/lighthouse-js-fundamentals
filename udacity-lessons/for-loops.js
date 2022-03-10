
// challenge 1 reference
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1;
}

// challenge 1 solution
for (let x = 9; x >= 1; x--) {
    console.log("hello " + x);
}

// challenge 2
for (let x = 5; x < 10; x++) {
    console.log(x);
  }

  // factorials
let solution = 12;
for (let i = solution-1; i > 0; i--) {
    solution *= i;
}
console.log(solution);

// theater seating challenge
for (let x = 0; x < 26; x++) {
    for (let y = 0; y < 100; y++) {
        console.log(x+"-"+y);
    }
}