
function ConverterCSVtoJSON() {
  "use strict";
  
  const Util = require("./Util.js");
  const FileReaderCSV = require("./FileReaderCSV.js");
  
  reader = new FileReaderCSV();
  
  return {
    convertFromFile: function(filePath) {
      reader.read(filePath);
    }
  };
  
};
module.exports = ConverterCSVtoJSON;