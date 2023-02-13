// var array = [];
// var total = 0;
// var finalResult = [];
// var firstValue;

// let addToArray = (value)=>{
//     array.push(value);
//     var b = parseInt(array.join(""));
//     firstValue = parseInt(document.getElementById("input").innerHTML=b);
//     console.log(firstValue);
// }

// let addFun = () => {
//     total += firstValue; 
//     document.getElementById("input").innerHTML='';
//     array=[];
// }

// let subFun = () => {
//     total = total - firstValue;
//     document.getElementById("input").innerHTML='';
//     array=[];
//     console.log(total);
// }  
// // let mulFun = () => {
//     //     total=total * firstValue;
// //     var firstValue =  parseInt(document.getElementById("input").innerHTML);
// //     document.getElementById("input").innerHTML='';
// //     array=[];
// //     console.log(total);
// // }   
// // let divFun = () => {
// //     var firstValue =  parseInt(document.getElementById("input").innerHTML);
// //     document.getElementById("input").innerHTML='';
// //     array=[];
// //     total=total / firstValue;
// //     console.log(total);
// // }   
// let clearFun = () => {
//     array=[];
//     document.getElementById("input").innerHTML='';
// }
// let resFun = () => {
//     // total += parseInt(document.getElementById("input").innerHTML);
//     total += firstValue;
//     document.getElementById("input").innerHTML=total;
//     array=[];
// }

let que = "";
let ans = 0;

let inp = document.getElementById("input");

let addToArray = (value) => {
  inp.value += value;
  console.log(inp.value);
};

let resFun = () => {
  inp.value = eval(inp.value);
  inp.value = '';
};

let clearFun = () => {
  inp.value = "";
};








