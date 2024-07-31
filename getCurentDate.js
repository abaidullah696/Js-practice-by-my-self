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