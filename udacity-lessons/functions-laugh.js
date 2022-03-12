function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(n) {

  let totalLaughs = "";
  for (let i = 0; i < n; i++){
      totalLaughs += "ha"
  }
  return totalLaughs + "!";
});
