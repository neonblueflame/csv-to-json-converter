/**
* Tests
*/

let filePathIn = "C:\\Users\\HP\\Workspace\\nodejs\\csv-to-json-converter\\in\\customer-data.csv";
let filePathOut = "C:\\Users\\HP\\Workspace\\nodejs\\csv-to-json-converter\\out\\customer-data-test.json"
// let filePathIn = "/sdcard/csv-to-json-converter/in/customer-data.csv";
let expectedJSON = require("./test/customer-data-test.json");

//*
const FileReaderCSVtest = require("./test/FileReaderCSVtest.js");
FileReaderCSVtest.readCSV(filePathIn);
FileReaderCSVtest.dispHeaders();
FileReaderCSVtest.dispRows();
FileReaderCSVtest.dispRowCount();
FileReaderCSVtest.dispRowDetail(1);
FileReaderCSVtest.dispRowDetail(1000);
//*/

//*
const ConverterCSVtoJSONtest = require("./test/ConverterCSVtoJSONtest.js");
const converter = new ConverterCSVtoJSONtest(expectedJSON);
converter.convertFromFile(filePathIn);
converter.writeToFile(filePathOut);
//*/