function registerNow(){
    location.href = "registration.html";
}

function userLogin(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let getAdminDetails = JSON.parse(localStorage.getItem("admin"));
    let getUserDetails = JSON.parse(localStorage.getItem("users"));
    
    if(email===getAdminDetails.email && pass===getAdminDetails.password){
        location.href = "dashboard.html";
    }
    else{
        document.getElementById("errNewsLogin").innerHTML="enter valid details";
        document.getElementById("errNewsLogin").style.display="block";
    }
    for(i=0;i<getUserDetails.length;i++){
        if(email===getUserDetails[i].email && pass===getUserDetails[i].password){
            let userD = getUserDetails[i].name;
            let nameSession = userD;
            let sessionObj = {
                dateOfBirth:getUserDetails[i].dateOfBirth,
                name: nameSession,
                loginDate: new Date().toLocaleDateString(),
                loginTime: new Date().toLocaleTimeString()
            }
            sessionStorage.setItem("session", JSON.stringify(sessionObj));
            location.href = "uDashboard.html";
        }
    }
}






