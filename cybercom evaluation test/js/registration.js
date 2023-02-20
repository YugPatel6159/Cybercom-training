  if(localStorage.getItem("admin")){
    document.getElementById("regButton").style.display="none"
    document.getElementById("adminAlReg").innerHTML="Admin already exists Please go to login page";
    document.getElementById("adminAlReg").style.display = "block";
    document.getElementById("loginBtn").style.display = "block";
  }
  else{
    document.getElementById("loginBtn").style.display = "none";
  }

  function userLogin(){
    location.href="login.html";
  }

  function userReg() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPassword").value;
    let conPass = document.getElementById("rePassword").value;
    let city = document.getElementById("selectCity").value;
    let state = document.getElementById("selectState").value;
    let checkBox = document.getElementById("tAndC");



  // email Validation
  if (!/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email)) {
    document.getElementById("errNewsEmail").innerHTML =
      "Please Enter valid Email address";
    document.getElementById("errNewsEmail").style.display = "block";
  } else {
    document.getElementById("errNewsEmail").style.display = "none";
  }





// password Validation
  var validPass = /^[A-Za-z]\w{7,14}$/;
  if (!pass.match(validPass)) {
    document.getElementById("errNewsPass").innerHTML =
      "Please Enter valid Password";
    document.getElementById("errNewsPass").style.display = "block";
  } else {
    document.getElementById("errNewsPass").style.display = "none";
  }




  // checking is passwords same?
  if ((!pass && !conPass) || pass != conPass) {
    document.getElementById("errNewsRePass").innerHTML = "Enter same passwords";
    document.getElementById("errNewsRePass").style.display = "block";
  } else {
    document.getElementById("errNewsRePass").style.display = "none";
  }

  // checkbox validation
  if (!checkBox.checked) {
    document.getElementById("errNewsCheck").innerHTML =
      "terms and conditions is not checked";
    document.getElementById("errNewsCheck").style.display = "block";
  } else {
    document.getElementById("errNewsCheck").style.display = "none";
  }

  // setting data to local storage
  let admin = {
    email: email,
    password: pass,
    name: name
  };
  if(admin.email&&admin.password&&admin.name){
    localStorage.setItem("admin", JSON.stringify(admin));
  }
  if(pass!=""&&conPass!="" && checkBox.checked && email!="" && name!=""){
    location.href="login.html";
  }

}
