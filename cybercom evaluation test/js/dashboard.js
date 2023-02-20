let adminName = JSON.parse(localStorage.getItem("admin")).name
document.getElementById("hello").innerHTML="Hello"+ adminName;
document.getElementById("hello").style.color="white";
function ageBased(){
    let count1 = 0;
    let count2 = 0;
    let count3 = 0;
    let userLocalData = JSON.parse(localStorage.getItem("users"));
    
    const date = new Date();
    let day = date.getDate();
    let month = date.toLocaleString("default", { month: "2-digit" });
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate);

    if(userLocalData.length){
        for (let i = 0; i < userLocalData.length; i++){
            let userAge = userLocalData[i].age;
            let bDate = userLocalData[i].dateOfBirth;
            let userName = userLocalData[i].name;
            if(userAge<18){
                count1++;
            }
            if(userAge>=18&&userAge<=50){
                count2++;
            }
            if(userAge>50){
                count3++;
            }
            
        //     if(currentDate == bDate){
        //     document.getElementById(id="bdayText").innerHTML="Today is "+userName+"'s Birthday"
        // }
        }
        document.getElementById('firstTypeUsers').innerHTML=count1;
        document.getElementById('secTypeUsers').innerHTML=count2;
        document.getElementById('thirdTypeUsers').innerHTML=count3;
    }
}
ageBased();


