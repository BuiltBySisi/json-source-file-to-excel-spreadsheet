const excelConverter = require('./excelConverter');
const jsonReader = require('./jsonReader');

const jsonFileName = './feast(1).json';

const jsonData = jsonReader.readJsonFile(jsonFileName);
excelConverter.createExcelFile(jsonData);
