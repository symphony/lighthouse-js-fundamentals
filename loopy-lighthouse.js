// loopylighthouse challenge
for (let i = 100; i <= 200; i++) {
  if (i % 4 === 0) { // check larger number first since there should be less cases ie. less calculations
    if (i % 3 === 0) { // check against both only if first check passes
      console.log("LoopyLighthouse"); // success
    } else {
      console.log("Lighthouse");
    }
  } else if (i % 3 === 0) {
    console.log("Loopy");
  } else {
    console.log(i);
  }
}