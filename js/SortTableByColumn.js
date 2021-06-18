setSort('stats');
setSort('titles');

function setSort(itableid){
    // Query the table
    let table = document.getElementById(itableid);
    // Query the headers
    let theaders = table.querySelectorAll('th');
    // Query all rows
    let tableBody = table.querySelector('tbody');
    let rows = tableBody.querySelectorAll('tr');

     // Track sort directions
     let directions = Array.from(theaders).map(function(header) {
        return '';
    });

    // Loop over the headers
    [].forEach.call(theaders, function(theaders, index) {
        theaders.addEventListener('click', function() {
            // This function will sort the column
            sortColumn(index,tableBody,rows,directions);
        });
    }); 
}

//let sortColumn = function(index) {
function sortColumn(index,tableBody,rows,directions) {
    // Clone the rows
    let newRows = Array.from(rows);
    // Get the current direction
    let direction = directions[index] || 'asc';
    // A factor based on the direction
    let multiplier = (direction === 'asc') ? 1 : -1;

    // Sort rows by the content of cells
    newRows.sort(function(rowA, rowB) {
        // Get the content of cells
        let cellA = rowA.querySelectorAll('td')[index].innerHTML;
        let cellB = rowB.querySelectorAll('td')[index].innerHTML;
        //if the value is number        
        if (isNaN(cellA) == false) {       
            cellA = parseFloat(cellA);            
        }

        if(isNaN(cellB) == false){
            cellB = parseFloat(cellB);            
        }

        switch (true) {
            case cellA > cellB: return 1* multiplier;
            case cellA < cellB: return -1* multiplier;
            case cellA === cellB: return 0;
        }
    });

    // Reverse the direction
    directions[index] = direction === 'asc' ? 'desc' : 'asc';

    // Remove old rows
    [].forEach.call(rows, function(row) {
        tableBody.removeChild(row);
    });

    // Append new row
    newRows.forEach(function(newRow) {
        tableBody.appendChild(newRow);
    });    
};