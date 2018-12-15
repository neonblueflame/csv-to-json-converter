
var ConverterCSVtoJSONtest = function(expectedJSON) {
  
  const fs = require("fs");
  const Util = require("../src/Util.js");
  const ConverterCSVtoJSON = require("../src/ConverterCSVtoJSON.js");
  
  let converter = new ConverterCSVtoJSON();
  
  function dispTestResult(result, expected) {
    if (result == expected)
        Util.log("Test OK");
    else
      Util.log("Test NOK");
  }
  
  return {
    convertFromFile: function(filePath) {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      let result = converter.convertFromFile(filePath);
      
      // TODO: compare array, compare object in Util
      dispTestResult(result.length, expectedJSON.length);
      
      Util.log(testName + " test: end");
    }
    , writeToFile: function(filePath) {
      let testName = arguments.callee.name;
      
      Util.log(testName + " test: start");
      
      converter.writeToFile(filePath);
      let result = JSON.parse(fs.readFileSync(filePath).toString());
      
      // TODO: compare array, compare object in Util
      dispTestResult(result.length, expectedJSON.length);
      
      Util.log(testName + " test: end");
    }
  };
};
module.exports = ConverterCSVtoJSONtest;