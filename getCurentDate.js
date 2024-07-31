function getDate() {
    const today = new Date()
    
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = String(today.getFullYear())
        // return day + month + year


        const mm_dd_yyyy = `${month}-${day}-${year}`;
        const mm_dd_yyyy_slash = `${month}/${day}/${year}`;
        const dd_mm_yyyy = `${day}-${month}-${year}`;
        const dd_mm_yyyy_slash = `${day}/${month}/${year}`;





        console.log(mm_dd_yyyy);         // Output: mm-dd-yyyy
        console.log(mm_dd_yyyy_slash);   // Output: mm/dd/yyyy
        console.log(dd_mm_yyyy);         // Output: dd-mm-yyyy
        console.log(dd_mm_yyyy_slash);   // Output: dd/mm/yyyy
}
getDate()



function getDateFormate() {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = String(today.getFullYear())


    const mm_dd_yyyy = `${day}/${month}/${year}`
    const mm_dd_yyyy_slash = `${day}-${month}-${year}`

    console.log(mm_dd_yyyy)
    console.log(mm_dd_yyyy_slash)
}
getDateFormate()












function getCurrentDate() {
    // Get the current date
    const today = new Date();
    
    // Get the day, month, and year
    let day = today.getDate();
    let month = today.getMonth() + 1; // Months are zero-indexed
    const year = today.getFullYear();
  
    // Add leading zero to day and month if needed
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;
  
    // Format the date in different styles
    const mm_dd_yyyy = month + '-' + day + '-' + year;
    const mm_dd_yyyy_slash = month + '/' + day + '/' + year;
    const dd_mm_yyyy = day + '-' + month + '-' + year;
    const dd_mm_yyyy_slash = day + '/' + month + '/' + year;
  
    // Log the formatted dates
    console.log(mm_dd_yyyy);         // Output: mm-dd-yyyy
    console.log(mm_dd_yyyy_slash);   // Output: mm/dd/yyyy
    console.log(dd_mm_yyyy);         // Output: dd-mm-yyyy
    console.log(dd_mm_yyyy_slash);   // Output: dd/mm/yyyy
  }
  
  // Call the function to display the current date
  getCurrentDate();
  
