let que = "";
let ans = 0;

let inp = document.getElementById("input");

const math={
  addFun: function addToArray(value){
    inp.value += value;
    console.log(inp.value);
  },
  resFun: function resFunction(){
    inp.value = eval(inp.value);
  },
  clrFun: function clearFunction(){
    inp.value = "";
  }
};

// let resFun = () => {
//   inp.value = eval(inp.value);
//   inp.value = '';
// };

// let clearFun = () => {
//   inp.value = "";
// };








