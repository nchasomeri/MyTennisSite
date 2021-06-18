function searchTable2(table_id, searchid) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue,wfound;
  input = document.getElementById(searchid);
  filter = input.value.toUpperCase();
  table = document.getElementById(table_id);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        wfound = true;
      } else {
        tr[i].style.display = "none";
        wfound = false;
      }
    }
    //--
    if (wfound==false){
      d = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          wfound=true;
        } else {
          tr[i].style.display = "none";
          wfound = false;
        }
      }
   }
     //--
     if (wfound==false){
      d = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          wfound=true;
        } else {
          tr[i].style.display = "none";
          wfound = false;
        }
      }
    }
     //--
     if (wfound==false){
      d = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          wfound=true;
        } else {
          tr[i].style.display = "none";
          wfound = false;
        }
      }
   }    
     //--
     if (wfound==false){
      d = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          wfound=true;
        } else {
          tr[i].style.display = "none";
          wfound = false;
        }
      }
    }        
    
  }
}

//-----------
function searchTable2(table_id, searchid) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById(searchid);
  filter = input.value.toUpperCase();
  table = document.getElementById(table_id);
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        //--
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
          } else {
            //--
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        }
      }
    }
  }
}

//-- event on search fields of table titles
var tsearch = document.getElementById("titles-search");
tsearch.addEventListener("keyup", function (e) {
  searchTable("titlesbody", "titles-search");
});

//-- event on search fields of table stats
var tsearch2 = document.getElementById("titles-search2");
tsearch2.addEventListener("keyup", function (e) {
  searchTable2("statsbody", "titles-search2");
});

