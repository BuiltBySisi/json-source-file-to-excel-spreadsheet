const fs = require('fs');

function readJsonFile(jsonFileName) {
  const data = fs.readFileSync(jsonFileName, 'utf8');
  return JSON.parse(data);
}

module.exports = { readJsonFile };
