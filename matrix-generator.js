function matrix (rows, columns) {
  var tempArray = [];
  var rowsArray = [];
  var columnsArray = [];
  var counter = 0;

  for (var i = 0; i < rows * columns; i++) {
    var x = Math.floor((Math.random() * 100) + 1);
    tempArray.push(x);
  }
  tempArray.sort(function(a, b) {
    return a - b;
  });

  for (var j = 0; j < columns; j++) {
    rowsArray = [];
    for (var k = 0; k < rows; k++) {
      rowsArray.push(tempArray[counter]);
      counter++;
    }
    columnsArray.push(rowsArray);
  }
  return columnsArray;
}