/// code for looping range assignment
function range(start, end, step) {
  let totals = [];
  if (start === undefined || end === undefined || step === undefined) {
    return totals;
  } else if (start > end) {
    return totals;
  } else if (step <= 0 ) {
    return totals
  } else {
    for (let i = start; i <= end; i += step) {
      totals.push(i);
    }
    return totals;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));