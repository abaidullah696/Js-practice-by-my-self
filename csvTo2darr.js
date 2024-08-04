function csvTo2DArray(csvString) {
    // Split the CSV string by new lines to get rows
    const rows = csvString.split('\n');
  
    // Split each row by commas to get individual values
    const array = rows.map(row => row.split(','));
  
    return array;
  }
  
  // Example input
  const csvString = `abc,def,ghi
  jkl,mno,pqr
  stu,vwx,yza`;
  
  // Convert CSV to 2D array
  const result = csvTo2DArray(csvString);
  
  // Output the result
  console.log(result);
  
  // Output: 
  // [
  //   ['abc', 'def', 'ghi'],
  //   ['jkl', 'mno', 'pqr'],
  //   ['stu', 'vwx', 'yza']
  // ]
  