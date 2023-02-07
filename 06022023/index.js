//Elements By Id
document.getElementById("para1").innerHTML="this is my updated paragraph";

//Elements By Tagname
const element = document.getElementsByTagName("p");
document.getElementById("para2").innerHTML='new paragraph is:'+ element[0].innerHTML;

//elements by tagname using 2 variables
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");
document.getElementById("para2").innerHTML = 'new Paragraph inside main' + y[0].innerHTML;

//elements by class name
const className = document.getElementsByClassName("intro");
document.getElementById("para2").innerHTML='this is done using class name' + className[0].innerHTML;

//elements by queryselectorall
const query = document.querySelectorAll("p.intro");
document.getElementById("para2").innerHTML='this is done using query selector'+query[0].innerHTML;



