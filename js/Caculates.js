"use strict"; //for declaring  variables 

function getRankAvg(){
    //copy table data on an array
    var tab_avg = table_to_array('stats');
    var total_rank =0;
    var tavg =0;
   
    //find the avg
    for(var i=0; i < tab_avg.length; i++){        
        if (i>0){ // pass first array row because its headers                             
            for(var j = 0; j < tab_avg[i].length; j++){
                //console.log(tab_avg[i][j]);
                if(j==3){
                    total_rank = total_rank + parseFloat(tab_avg[i][j]);                                        
                }
            }
        }
    }
    if (total_rank>0){       
      tavg =(total_rank/(i-1)).toFixed(2);       
    }
    
    return tavg;
    //document.getElementById('rank').innerHTML=tavg;
}

function getWins(){
    var tab_avg = table_to_array('stats');
    var twins=0;

    //caculate wins & losts
    for(var i=0; i < tab_avg.length; i++){        
        if (i>0){ // pass first array row because its headers                             
            for(var j = 0; j < tab_avg[i].length; j++){
                //console.log(tab_avg[i][j]);
                if(j==5) {
                    if (tab_avg[i][j]=='W'){
                        twins++;
                    }
                    // if (tab_avg[i][j]=='L'){
                    //     tlosts++;
                    // }
                }
            }
        }
    }
    return twins;
    //document.getElementById('losts').innerHTML=tlosts;
    //document.getElementById('wins').innerHTML=twins;
}
function getLosts(){
    var tab_avg = table_to_array('stats');    
    var tlosts =0;

    //caculate wins & losts
    for(var i=0; i < tab_avg.length; i++){        
        if (i>0){ // pass first array row because its headers                             
            for(var j = 0; j < tab_avg[i].length; j++){
                //console.log(tab_avg[i][j]);
                if(j==5) {

                    if (tab_avg[i][j]=='L'){
                        tlosts++;
                    }
                }
            }
        }
    }

    return tlosts
}

function getAge() {
    var birthday = new Date(1987, 5, 22), //Year, month-1 , day.
      today = new Date(),
      one_year = 1000 * 60 * 60 * 24 * 365;
    return Math.floor((today.getTime() - birthday.getTime()) / one_year);
  }

// Set default value for Player info
function initiate(){

    var wPlayer = {
        Name: 'Novac Djokovic',
        Height: '1.88M',
        Age: getAge(),
        Born : '22 May 1987',
        Birthplace: 'Belgrade, Serbia',
        Plays: 'Right-Handded',
        Ranking:  getRankAvg(),
        Wins: getWins(),
        Losts:  getLosts()
      }
      localStorage.setItem('sPlayer', JSON.stringify(wPlayer));
}
initiate();


// Retrieving data:
let text = localStorage.getItem("sPlayer");
let sp = JSON.parse(text);
document.getElementById('hName').innerHTML = sp.Name;
document.getElementById('height').innerHTML = sp.Height;
document.getElementById('daybirth').innerHTML = sp.Born;
document.getElementById('age').innerHTML = sp.Age;
document.getElementById("bplace").innerHTML = sp.Birthplace;
document.getElementById("plays").innerHTML = sp.Plays;
document.getElementById("rank").innerHTML = sp.Ranking;
document.getElementById("wins").innerHTML = sp.Wins;
document.getElementById('losts').innerHTML = sp.Losts;