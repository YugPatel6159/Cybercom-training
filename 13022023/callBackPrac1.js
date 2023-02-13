function firstFunction(secFun){
    setTimeout(()=>{
        console.log("function one is executing");
        secFun(thirdFunction);
    },10000)
}
function secondFunction(thirdFunction){
    setTimeout(()=>{
        console.log("function second is executing");
        thirdFunction();
    },10000)
}
function thirdFunction(){
    setTimeout(()=>{
        console.log("function third is executing");
    },8000)
}

firstFunction(secondFunction);