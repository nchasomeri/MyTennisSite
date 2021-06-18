var TempTable = []; //array to keep the tabledata
var TempTable2 = []; //array to keep the tabledata


//Copy html table data into Array
function table_to_array(table_id) {
    var tablerows = document.getElementById(table_id).rows;
    
    var newTab = [];
    for (var i = 0; i < tablerows.length; i++) {
            var ch = tablerows[i].children
            var tabvals = []
            for (var j = 0; j < ch.length; j++) {
                tabvals.push(ch[j].innerText);
            }
            newTab.push(tabvals)
    }
    return newTab;
}

//Load table data from array
function load_from_array(table_id){
    var htmltab = document.getElementById(table_id);
    var ltmp = arguments[1];
    var tr,td;
    var tbody = htmltab.querySelector('tbody');
    tbody.innerHTML="";

    //console.log(ltmp);
    for (var i = 0; i <  ltmp.length; i++){
        if (i>0){
            col = ltmp[i].length;
            tr = tbody.insertRow(tbody.rows.length);

            for(col=0; col< ltmp[i].length; col++){ 
                td = tr.insertCell(tr.cells.length);                
                td.innerHTML = ltmp[i][col];
                td.setAttribute('data-column-index', col);
            }        
        }  
    }    
   }
 
   //Load Titles table data from json 

   var jtitlesdata =[
    {
        "Year": "2021",
        "Titles": "1",
        "Tournaments": " Australian Open (Outdoor/Hard)\n                            "
    },
    {
        "Year": "2020",
        "Titles": "4",
        "Tournaments": "ATP Masters 1000 Rome (Outdoor/Clay)\n                                    <br>ATP Masters 1000 Cincinnati (Outdoor/Hard)\n                                    <br>Dubai (Outdoor/Hard)\n                                    <br>Australian Open (Outdoor/Hard)\n                                "
    },
    {
        "Year": "2019",
        "Titles": "5",
        "Tournaments": " ATP Masters 1000 Paris (Indoor/Hard)\n                                    <br> Tokyo (Outdoor/Hard)\n                                    <br> Wimbledon (Outdoor/Grass)\n                                    <br> ATP Masters 1000 Madrid (Outdoor/Clay)\n                                    <br> Australian Open (Outdoor/Hard)\n                                "
    },
    {
        "Year": "2018",
        "Titles": "4",
        "Tournaments": " ATP Masters 1000 Shanghai (Outdoor/Hard)\n                                    <br>US Open (Outdoor/Hard)\n                                    <br>ATP Masters 1000 Cincinnati (Outdoor/Hard)\n                                    <br>Wimbledon (Outdoor/Grass)\n                                "
    },
    {
        "Year": " 2017 ",
        "Titles": "2",
        "Tournaments": "Eastbourne (Outdoor/Grass)\n                                    <br>Doha (Outdoor/Hard) \n                                "
    }
]

function buildTitlesTab(data){
    var table = document.getElementById('titlesbody')

    for (var i = 0; i < data.length; i++){
        var row = `<tr> <td data-column-index="0">${data[i].Year}</td>
                        <td data-column-index="1">${data[i].Titles}</td>
                        <td data-column-index="2">${data[i].Tournaments}</td>
                  </tr>`
        table.innerHTML += row;
    }
    setSort('titles');
}
buildTitlesTab(jtitlesdata);


//----------------------------------------------------
var tcopydata = document.getElementById('toArrayData2');
tcopydata.addEventListener('click',  function(e) {
    TempTable2 = table_to_array('stats');
    console.log(TempTable2);    
    alert("The table data copied");
});

//----------------------------------------------------
var tloaddata = document.getElementById('fromArrayData2');
tloaddata.addEventListener('click',  function(e) {
    load_from_array('stats',TempTable2);
    setSort('stats');
    //for show/hide columns after loading
    cells = Array.from( document.getElementById('stats').querySelectorAll('th, td'));
    alert('The array data copied to table');
        
});



