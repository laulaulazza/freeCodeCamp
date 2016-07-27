function getIndexToIns(arr, numToFind) {

  var intArray = arr.map(function(num) {
  return parseInt(num);
  });
  
  intArray.push(parseInt(numToFind));
  
  intArray.sort(function(a,b) {
  return a - b;
  });
  
  return intArray.indexOf(parseInt(numToFind));
}

getIndexToIns([40, 60], 50);
