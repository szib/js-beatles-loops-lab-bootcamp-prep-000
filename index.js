// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for(var c = 0; c < musicians.length; c++) {
    var s = `${musicians[c]} plays ${instruments[c]}`;
    arr = [...arr, s]
  }
  return arr
}

function johnLennonFacts(facts) {
  var i = 0
  var arr = []
  while(i < facts.length) {
    arr[i] = `${facts[i++]}!!!`
  }
  return arr
}

function iLoveTheBeatles(num) {
  var arr = []
  var i = 0;
  do {
    arr.push('I love the Beatles!')
    i++
  } while (i <= num)
  return arr
}