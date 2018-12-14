
var FileReaderCSVtest = function() {
  
  const fs = require("fs");
  const path = require("path");
  
  const FileReaderCSV = require("../src/FileReaderCSV.js");
  const Util = require("../src/Util.js");
  const reader = new FileReaderCSV();
  
  let defaultPath = "C:\\Users\\HP\\Workspace\\nodejs\\csv-to-json-converter\\in\\customer-data.csv";
  
  function isEmpty(string) {
    return (Util.isNull(string) || string == "")
  }
  
  let rawCSV = {};
  function getRawCSV(path) {
    if (isEmpty(rawCSV))
      rawCSV = fs.readFileSync(path).toString();
    
    return rawCSV;
  }
  
  return {
    readCSV: function() {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      let rawFile = reader.read(defaultPath);
      if (rawFile == getRawCSV(defaultPath))
        Util.log("Test OK");
      
      else
        Util.log("Test NOK");
        
      Util.log(testName + " test: end");
    }
    , dispHeaders: function() {
      let testName = arguments.callee.name;
     
      Util.log(testName + " test: start");
      let headers = reader.getHeaders();
      Util.log(headers);
      Util.log(testName + " test: end");
    }
    , dispRows: function() {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      let rows = reader.getRows();
      Util.log(rows);
      Util.log(testName + " test: end");
    }
    , dispRowCount: function(index) {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      let count = reader.getRowCount(index);
      Util.log(count);
      Util.log(testName + " test: end");
    }
    , dispRowDetail: function(index) {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      let row = reader.getRowDetail(index);
      Util.log(row);
      Util.log(testName + " test: end");
    }
  };
}();
module.exports = FileReaderCSVtest;