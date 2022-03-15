// function to check if number is odd
function isOdd(n){
  return console.log(n+" is odd: " + !!(n%2));
}

isOdd(5);
isOdd(12);
isOdd(1);
isOdd(0);
isOdd(true);
isOdd(13);
isOdd(false);
isOdd(true);
isOdd("true");
isOdd("false");
isOdd("");
isOdd(NaN);
isOdd(undefined);