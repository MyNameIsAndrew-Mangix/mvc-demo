const { raw } = require('body-parser');
const fs = require('fs');
const dataFilePath = 'db.json';

//Read data from the JSON
function readData() {
    const rawData = fs.readFileSync(dataFilePath);
    return JSON.parse(rawData);
}

function writeData(data) {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
}

module.exports = { readData, writeData }