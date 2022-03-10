// FizzBuzz using For
for (i = 1; i <=100; i++) {
  if (i % 5 === 0) { // check for 5 first since there should be less cases
    if (i % 3 === 0) { // check for both only if 5 is successful
      console.log("FizzBuzz");
    } else {
      console.log("Buzz");
    }
  } else if (i % 3 === 0) { // check for 3
    console.log("Fizz");
  } else {
    console.log(i);
  }
}

// JuliaJames using While
var x = 1;

while (x <= 20) {
  if (x % 3 === 0) {
    if (x % 5 === 0) {
      console.log("JuliaJames");
    } else {
      console.log("Julia");
    }
  } else if (x % 5 === 0) {
    console.log("James");
  } else {
    console.log(x);
  }
  x++;
}