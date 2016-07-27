
function destroyer(arr) {
  // [1, 2, 3, 1, 2, 3], 2, 3 => [[1, 2, 3, 1, 2, 3], 2, 3]
  var args = Array.from(arguments);
  // grab the items to match for deletion
  var toMatch = args.slice(1,args.length);
  //create function
  function getRid(valueFromFunctionArray) {
    /*
    //loop through the items to match (2,3)
    for (var i = 0; i < toMatch.length; i++) {
      //if the value from toMatch matches the current value from the array given as argument in the function, return false
      if (toMatch[i] === valueFromFunctionArray) {
        return false;
      }
    }
   //otherwise return true
    return true;*/
    // returns any values that aren't found in toMatch
    return toMatch.indexOf(valueFromFunctionArray) < 0;
  }
  // filter out the false values
  return arr.filter(getRid);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);