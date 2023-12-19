const csv = require('csvtojson');
const fs = require('fs');

// Input CSV file path
const csvFilePath = 'books.csv';

// Output JSON file path
const jsonFilePath = 'output.json';

// Convert CSV to JSON
csv({
  delimiter: ';',   // Specify the delimiter used in your CSV file
  quote: '"',       // Specify the quote character used in your CSV file
})
  .fromFile(csvFilePath)
  .then((jsonArrayObj) => {
    // Save JSON to file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonArrayObj, null, 2));
    console.log('Conversion completed. JSON saved to', jsonFilePath);
  })
  .catch((error) => {
    console.error('Error converting CSV to JSON:', error);
  });
