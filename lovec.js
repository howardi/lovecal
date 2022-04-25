var lovecalcu = document.getElementById("lovecalcu");

function lovecalc(){
var fname = prompt("input your name");
 var lname =  prompt("input your spouse name");
 var loveScores = Math.floor(Math.random() * 100) + 1;
 var output = fname + " " + "and " + lname  + " are " + loveScores + "%" + " match";
 return output;
}
var lovecalculator = lovecalc();
lovecalcu.innerHTML = lovecalculator;