import TableCSV from "./TableCSV.js";

const tableRoot = document.querySelector("#csvRoot");
const  csvFileInput = document.querySelector("#csvFileInput");
const tableCSV = new TableCSV(tableRoot);

csvFileInput.addEventListener("change",e => {

    Papa.parse(csvFileInput.files[0], {
        delimiter: ",",
        skipEmptyLines: true,
        complete: results => {
            tableCSV.update(results.data.slice(1), results.data[0]);
        }
    });
});

 
