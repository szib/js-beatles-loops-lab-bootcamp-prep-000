// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for(var c = 0; c < musicians.length; c++) {
    var s = `${musicians[c]} plays ${instruments[c]}`;
    arr = [...arr, s]
  }
  return arr
}