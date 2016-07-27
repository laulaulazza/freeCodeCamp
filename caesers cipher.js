function rot13(str) { // LBH QVQ VG!
  var newStr = "";
  var shift = 13;
  var start = "A".charCodeAt(0);
  var end = "Z".charCodeAt(0);
  var middle = start + Math.floor((end - start) / 2);
  
  for ( var i = 0; i < str.length; i++) {
    var curChar = str.charCodeAt(i);
    
    if (curChar >= start && curChar <= middle) {
      newStr += String.fromCharCode(curChar + shift);
    }
    else if (curChar > middle && curChar <= end) {
      newStr += String.fromCharCode(curChar - shift);
    }
    else { 
      newStr += String.fromCharCode(curChar);
    }
  }
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");