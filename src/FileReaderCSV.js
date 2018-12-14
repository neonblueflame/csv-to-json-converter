/**
* Reads CSV file. Assumption is that the input is a valid CSV
*/
function FileReaderCSV() {
  "use strict";
  
  const fs = require("fs");
  const path = require("path");
  const Util = require("./Util.js");
  
  let filePath = "";
  let fileRaw = "";
  let fileHeaders = [];
  let fileRows = [];
  let fileRowCount = 0;
  
  function loadFile() {
    fileRaw = fs.readFileSync(filePath).toString();
    fileRows = fileRaw.split("\n");
    fileRowCount = fileRows.length;
  }
  
  return {
    read: function(path) {
      filePath = path;
      loadFile();
      
      return fileRaw;
    }
    , getHeaders: function() {
      return fileRows[0].split(",");
    }
    , getRows: function() {
      return fileRows;
    }
    , getRowCount: function() {
      return fileRowCount
    }
    , getRowDetail: function(index) {
      if (index <= (fileRowCount - 1))
        return fileRows[index].split(",");
      
      else {
        Util.log("Index exceeds row count (" + fileRowCount + ")");
        return [];
      }
    }
  };
};
module.exports = FileReaderCSV;