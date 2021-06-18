"use strict"; 

let lmenu = document.getElementById('mTabrow');
let lstatstab = document.getElementById('titles');
let lisMenuOpen = false;


// ----------------------------------------------------------------------------
// ---- Show/Hide custom menu table columns when button clicked ---------------
// ----------------------------------------------------------------------------
let lshowmenu = document.getElementById('addpb1');

lshowmenu.addEventListener('click',  function(e) {
    if (lisMenuOpen==true){
        lmenu.classList.add('mhidden');
        lshowmenu.innerHTML='Add Row';
        lisMenuOpen=false;
    }
    else{
        lmenu.classList.remove('mhidden'); 
        lisMenuOpen=true;
        lshowmenu.innerHTML='Cancel';
    }    

});

// -------------------------------------------
// ---- Add Row in Tournaments ---------------
// -------------------------------------------
let lsavepb = document.getElementById('addRowpb');
lsavepb.addEventListener('click',  function(e) {
    alert("Save");
    AddRowTab(document.getElementById('fyear').value,
    document.getElementById('ltitles').value,
    document.getElementById('ltours').value,       
    );
    lmenu.classList.add('mhidden');
    lshowmenu.innerHTML='Add Row';
    lisMenuOpen=false;
});


//insert row into table
function AddRowTab(year, titles,Tournaments){

    var htmltab = document.getElementById("titles");
    var tablerows = htmltab.rows.length;

    var row = htmltab.insertRow(tablerows);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell2.innerHTML = year;
    cell3.innerHTML = titles;
    cell4.innerHTML = Tournaments;
   }