
function ConverterCSVtoJSON() {
  "use strict";
  
  const fs = require("fs");
  const Util = require("./Util.js");
  const FileReaderCSV = require("./FileReaderCSV.js");
  
  const reader = new FileReaderCSV();
  let arrJson = [];
  
  function arrToJson() {
    let arrKeys = reader.getHeaders();
    let arrKeysLen = arrKeys.length;
    let countData = reader.getRowCount();
    
    // Exclude header row
    for(let i = 1; i < countData; i++) {
      
      let arrValues = reader.getRowDetail(i);
      let json = {};
      
      // Assumption: header length == data length
      for(let j = 0; j < arrKeysLen; j++) {
        let value = (Util.isEmpty(arrValues[j])) ? 
          "" : arrValues[j].trim();
          
        json[arrKeys[j].trim()] = value;
      }
      
      arrJson.push(json);
    }
  }
  
  return {
    convertFromFile: function(filePath) {
      reader.read(filePath);
      arrToJson();
      
      return arrJson;
    }
    , getJSON: function() {
      return arrJson;
    }
    , writeToFile: function(filePath) {
      // TODO: make async, emit/listen to events
      fs.writeFileSync(filePath, JSON.stringify(arrJson));
    }
  };
  
};
module.exports = ConverterCSVtoJSON;
