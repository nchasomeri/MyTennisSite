"use strict"; 

var tmenu = document.getElementById('tmenu');
var statstab = document.getElementById('stats');
var headers = Array.from(statstab.querySelectorAll('th'));
var isMenuOpen = false;

//Read table header columns and add list elements in the menu
headers.forEach(
    function(th, index) {
        // Build the menu item
        let li = document.createElement('li');
        let label = document.createElement('label');
        let lcheckbox = document.createElement('input');
        lcheckbox.setAttribute('type', 'checkbox');
        
        // Create the text node
        let text = document.createTextNode(th.textContent);

        label.appendChild(lcheckbox);
        label.appendChild(text);

        li.appendChild(label);
        tmenu.appendChild(li);

        // Handle the event 
        lcheckbox.addEventListener('change', function(e) {
            e.target.checked ? showColumn(index) : hideColumn(index);
        });
        lcheckbox.setAttribute('checked', 'true'); // first set all with checked option true
});

// ----------------------------------------------------------------------------
// ---- Show/Hide custom menu table columns when button clicked ---------------
// ----------------------------------------------------------------------------
var tshowmenu = document.getElementById('colmenuoption');
tshowmenu.addEventListener('click',  function(e) {
    if (isMenuOpen==true){
        tmenu.classList.add('mhidden');
        tshowmenu.innerHTML='Show/Hide Columns';
        isMenuOpen=false;
    }
    else{
        tmenu.classList.remove('mhidden'); 
        isMenuOpen=true;
        tshowmenu.innerHTML='Close Menu';
    }    

});
// ---------------------------------------------------------------------
// Functions of show and hide the columns of the table
//------------------------------------------------------
// Get the number of columns
var numColumns = headers.length;
var cells = Array.from(statstab.querySelectorAll('th, td'));

//--- Hide column of table when unchecked -----------------
cells.forEach(function(cell, index) {
    cell.setAttribute('data-column-index', index % numColumns);
});

//--- Hide column of table when unchecked -----------------
var hideColumn = function(index) {    
    cells
        .filter(function(cell) {           
           return cell.getAttribute('data-column-index') == index;
        })
        .forEach(function(cell) {
            cell.style.display = 'none';
        });
};  
//--- Show column of table when checked -----------------
var showColumn = function(index) {    
    cells
        .filter(function(cell){           
           return cell.getAttribute('data-column-index') == index;
        })
        .forEach(function(cell) {
            cell.style.display = '';
            cell.setAttribute('data-shown', 'true');
        });
    
        tmenu.querySelectorAll('[type="checkbox"][disabled]')
        .forEach(function(checkbox) {
            checkbox.removeAttribute('disabled');
        });
};  
