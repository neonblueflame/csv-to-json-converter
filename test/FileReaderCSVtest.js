
var FileReaderCSVtest = function() {
  
  const fs = require("fs");  
  const FileReaderCSV = require("../src/FileReaderCSV.js");
  const Util = require("../src/Util.js");
  
  const reader = new FileReaderCSV();
  
  let rawCSV = "";
  let headers = [];
  let rows = [];
  
  function getRawCSV(path) {
    Util.log(path);
    if (Util.isEmpty(rawCSV)) {
      rawCSV = fs.readFileSync(path).toString();
      rows = rawCSV.split("\n");
      headers = rows[0].split(",");
    }
    
    return rawCSV;
  }
  
  function rowCSVtoArray(strCSV) {
    if (Util.isEmpty(strCSV))
      return [];
    
    return strCSV.split(",");
  }
  
  function dispTestResult(result, expected) {
    if (result == expected)
        Util.log("Test OK");
    else
      Util.log("Test NOK");
  }
  
  return {
    readCSV: function(path) {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      let expected = getRawCSV(path);     
      let result = reader.read(path);
      
      dispTestResult(result, expected);
        
      Util.log(testName + " test: end");
    }
    , dispHeaders: function() {
      let testName = arguments.callee.name;
     
      Util.log(testName + " test: start");
      
      let readerHeaders = reader.getHeaders();
      let result = Util.compareArray(readerHeaders, headers);
      dispTestResult(result, true);
      
      Util.log(testName + " test: end");
    }
    , dispRows: function() {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      let readerRows = reader.getRows();
      let result = Util.compareArray(readerRows, rows);
      dispTestResult(result, true);
      
      Util.log(testName + " test: end");
    }
    , dispRowCount: function() {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      let expected = rows.length;     
      let result = reader.getRowCount();
      dispTestResult(result, expected);
      
      Util.log(testName + " test: end");
    }
    , dispRowDetail: function(index) {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      let expected = [];
      let result = reader.getRowDetail(index);
      dispTestResult(result.length, expected.length);
      
      Util.log(testName + " test: end");
    }
  };
}();
module.exports = FileReaderCSVtest;