const Excel = require('excel4node');

function createExcelFile(jsonData) {
  const wb = new Excel.Workbook();
  const ws = wb.addWorksheet('Sheet 1');

  // Define column headers and create a style
  const headers = ['SKU', 'Code', 'Name', 'Make', 'Model', 'OEM', 'DEALER KES', 'Qty', 'Multiplicity'];
  const style = wb.createStyle({
    font: {
      bold: true,
    },
  });

  // Write headers in the first row
  for (let i = 0; i < headers.length; i++) {
    ws.cell(1, i + 1).string(headers[i]).style(style);
  }

  // Write data to the Excel file
  let rowIndex = 2;
  for (const category in jsonData) {
    if (jsonData.hasOwnProperty(category)) {
      const categoryData = jsonData[category];
      for (const sku in categoryData) {
        if (categoryData.hasOwnProperty(sku)) {
          const item = categoryData[sku];
          ws.cell(rowIndex, 1).string(sku);
          ws.cell(rowIndex, 2).string(item.Code);
          ws.cell(rowIndex, 3).string(item.Name);
          ws.cell(rowIndex, 4).string(item.Make);
          ws.cell(rowIndex, 5).string(item.Model);
          ws.cell(rowIndex, 6).string(item.OEM);
          ws.cell(rowIndex, 7).string(item['DEALER KES']);
          ws.cell(rowIndex, 8).string(item.Qty);
          ws.cell(rowIndex, 9).string(item.Multiplicity);
          rowIndex++;
        }
      }
    }
  }

  wb.write('output/output.xlsx');
}

module.exports = { createExcelFile };
