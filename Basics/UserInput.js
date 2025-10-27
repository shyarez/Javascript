// Accepting user Input 
// 2 ways:-
// 1) Easier Way => window prompt
// 2) Proffesional way => HTML textbox

// METHOD-1)
// let username;
// username = window.prompt("What is your username?");
// console.log(username);

// METHOD-2)
let username;

document.getElementById("mySubmit").onclick = function(){
username = document.getElementById("myText").value;
document.getElementById("myH1").textContent= `Hello ${username}`;

}
