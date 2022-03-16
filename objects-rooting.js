const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Sally 2r',
    redness: 13,
    plumpness: 1
  },
    {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness'

/* const judgeVegetable = function (vegetables, metric) {
  // set index 0 as default values to compare against
  let winnerIndex = 0;

  // iterate through submissions (skipping index 0)
  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i][metric] > vegetables[winnerIndex][metric]) {
      winnerIndex = i; // update current winner
    }
  }
  return vegetables[winnerIndex]['submitter'];
}
 */

// sort method
const judgeVegetable = function (v, m) {
  return v.sort((a, b) => {return b[m] - a[m]})[0].submitter;
}

console.log(judgeVegetable(vegetables, metric));

