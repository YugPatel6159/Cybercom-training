let adminName = JSON.parse(localStorage.getItem("admin")).name
document.getElementById("hello").innerHTML="Hello"+ adminName;
document.getElementById("hello").style.color="white";
if(localStorage.getItem("sessionArray")){

    let userSessionData = JSON.parse(localStorage.getItem("sessionArray"));
    for(i=0;i<userSessionData.length;i++){
        let name = userSessionData[i].name;
        let loginTime = userSessionData[i].loginTime;
        let loginDate = userSessionData[i].loginDate;
        let logoutTime = userSessionData[i].logoutTime;
        let logoutDate = userSessionData[i].logoutDate;
        console.log(name);
        var table = document.getElementById('sessionTable');
        var row = table.insertRow();
        row.insertCell(0).innerHTML = name;
        row.insertCell(1).innerHTML = loginTime;
        row.insertCell(2).innerHTML = loginDate;
        row.insertCell(3).innerHTML = logoutTime;
        row.insertCell(4).innerHTML = logoutDate;
    }
}