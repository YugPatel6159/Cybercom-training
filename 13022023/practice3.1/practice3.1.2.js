function firstFun(){
    
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve("output from one")
        },5000);
    });
    
}

function secondFun() {
    
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve("output from two")
        },10000);
    });
}

function thirdFun() {
    
        return new Promise((resolve)=>{
            setTimeout(()=>{
            resolve("output from three")
        },15000);
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