// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for(var i = 0, i<musicians.length; i++) {
    var s = `${musicians[i]} plays ${instruments[i]}`;
    arr = [...arr, s]
  }
  return arr
}