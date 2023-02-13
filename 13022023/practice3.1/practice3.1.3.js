function firstFun(){
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("1st function starts executing")
    },10000);
});

}

function secondFun() {

    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("2nd function starts executing")
    },10000);
});
}

function thirdFun() {

    return new Promise((resolve)=>{
        setTimeout(()=>{
        resolve("3rd function starts executing")
    },8000);
});

}

firstFun().then((data)=>{console.log(data)

secondFun().then((data)=>{
    console.log(data)

    thirdFun().then((data)=>{
        console.log(data)
    })
})
})
.catch((err)=>{console.log(err);})