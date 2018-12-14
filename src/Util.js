
/**
* Utility functions
*/

var Util = {

  log: function(text) {
    console.log(text);
  }
  , isNull: function(obj) {
    if (obj == undefined || obj == null)
      return true;
      
    else
      return false;
  }
  
};
module.exports = Util;