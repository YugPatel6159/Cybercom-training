
let userName = JSON.parse(sessionStorage.getItem("session")).name;
document.getElementById("hello").innerHTML="Hello"+" "+ userName;
document.getElementById("hello").style.color="white";