//Selecting the div tag 
let myTable = document.querySelector('#table');
myTable.setAttribute("style", "font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: block; margin: 20px;");

//Headers array
let headers = ['Name', 'Age', 'DOB', 'Email', 'Company'];

//User details array
let details = [
    {name: 'Hridya', age: 22, DOB: "18-Nov-2000", Email: "hridyadham@gmail.com", Company: "Gemini Solutions"},
    {name: 'Mehar', age: 22, DOB: "10-Dec-2000", Email: "mehar_mutreja@gmail.com", Company: "Intelliwings"},
    {name: 'Kunal', age: 21, DOB: "15-Aug-2001", Email: "kunalkhandelwal15@gmail.com", Company: "Nokia"},
    {name: 'Yash', age: 22, DOB: "21-Sep-2000", Email: "yash_sharma21@gmail.com", Company: "Gemini Solutions"},
    {name: 'Ishita', age: 22, DOB: "20-July-2000", Email: "ishita_kanojia22@gmail.com", Company: "Expedia"}
];

//Self-Invoked Function
(function self() {

    let table = document.createElement('table');  //creating a new table
    table.setAttribute("style", "text-align: justify; border-collapse: collapse; width: 100%;"); //dynamically adding css to table 

    let headerRow = document.createElement('tr'); //creating a new row

    //looping through the headers array
    headers.forEach(headerText => {

        let header = document.createElement('th'); //new data
        header.setAttribute("style", "font-weight: bold; text-transform: uppercase; font-size: larger; border: 1px solid #cccccc; padding: 8px;"); //dynamic css to headers

        let textNode = document.createTextNode(headerText); //creating a textnode 
        header.appendChild(textNode); //appending to th
        headerRow.appendChild(header); //appending to tr
    });

    table.appendChild(headerRow); //appending to table

    //looping through the details array
    details.forEach(emp => {
        let row = document.createElement('tr');
        Object.values(emp).forEach(text => {
            let cell = document.createElement('td'); //new data
            cell.setAttribute("style", "font-size: larger; border: 1px solid #cccccc; padding: 8px;"); //adding dynamic css to data
            let textNode = document.createTextNode(text); //creating a textnode
            cell.appendChild(textNode); //appending to td
            row.appendChild(cell); //appending to tr
        })
        table.appendChild(row); //appending to table
    });

    myTable.appendChild(table); //finally appending to div

  })();

  