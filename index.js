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
  while(i < length.facts) {
    arr[i] = `${facts[i]}!!!`
  }
  return arr
}