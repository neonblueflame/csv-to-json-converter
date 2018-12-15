const ConverterCSVtoJSON = require("./src/ConverterCSVtoJSON.js");
var converter = new ConverterCSVtoJSON();
converter.convertFromFile("in/customer-data.csv");
converter.writeToFile("customer-data.json");