
/**
* Utility functions
*/

var Util = {

  log: console.log
  /*
    Test:
    different length
    different values, same length
    different values at the beginning
    different values at the end
    same values except the result has more values
    same values except the result has less values
    same values, same length, different indices
  */
  , compareArray(arr1, arr2) {
    if ((Array.isArray(arr1) && Array.isArray(arr2)) 
      && (arr1.length == arr2.length)) {
      
      for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i])
          return false;
      }
      
      return true;
    }
    
    return false;
  }
  , isNull: function(obj) {
    if (obj == undefined || obj == null)
      return true;
      
    else
      return false;
  }
  , isEmpty(string) {
    return (Util.isNull(string) || string == "")
  }
  
};
module.exports = Util;