// is even function
const isEven = function (n) {
  return (n % 2 === 0 ? n + " is even." : n + " is not even.");
}

console.log(isEven(7));

const tenIsEven = isEven(10);
const elevenIsEven = isEven (11);

console.log(tenIsEven);
console.log(elevenIsEven);