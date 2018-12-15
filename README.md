# csv-to-json-converter
CSV to JSON Converter. Module 1 assignment submission to Introduction to NodeJS.

To run, change CSV file input path and JSON file output path in Main.js and enter npm start in terminal.
<br />
`npm start`

Or, just run Main.js itself.
<br />
`node Main.js`

Both commands will run Main.js.

To run unit test, run npm test in a terminal. This will run the codes under test directory.
<br />
`npm test`

### Notes
The get count function in the file reader code is expected to return the count, including the header. Also, assumption for this to work is that CSV to be read is valid, and JSON is valid for writing into file. In addition, array compare in util only works as long the values in both arrays are ordered in the same way. Most functions will not return an error message but rather, an empty object/array/string or, an exception.