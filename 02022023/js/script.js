function emailCheck(){
  var email1 = document.getElementById("email");
  var email2 = document.getElementById("retype_email");
  var pass1 = document.getElementById("password");
  var pass2 = document.getElementById("re_password");

  if(email1.value!=email2.value){
    alert("enter same email");
  }
  if(pass1.value!=pass2.value){
    alert("please enter same password");
  }  
}
function storeData(){
  var firstName =document.getElementById("first_name").value;
  var lastName =document.getElementById("last_name").value;
  var dateOfBirth =document.getElementById("date").value;
  var gender =document.getElementById("gender").value;
  var email =document.getElementById("email").value;
  var securityQue =document.getElementById("security_que").value;
  var securityAns =document.getElementById("sec_ans").value;
  var address =document.getElementById("address").value;
  var city =document.getElementById("city").value;
  var state =document.getElementById("state").value;
  var zipCode =document.getElementById("zip_code").value;
  var optionalZipCode =document.getElementById("optional_code").value;
  var phone =document.getElementById("phone").value;

  localStorage.setItem("First name",firstName);
  localStorage.setItem("Last name",lastName);
  localStorage.setItem("Date of birth",dateOfBirth);
  localStorage.setItem("Gender",gender);
  localStorage.setItem("Email",email);
  localStorage.setItem("Security Question",securityQue);
  localStorage.setItem("Security Answer",securityAns);
  localStorage.setItem("Address",address);
  localStorage.setItem("City",city);
  localStorage.setItem("State",state);
  localStorage.setItem("Zip code",zipCode);
  localStorage.setItem("Optioanal Zip Code",optionalZipCode);
  localStorage.setItem("Phone Number",phone); 

  
}

function showData(){
  var firstName= localStorage.getItem("First name");
  var lastName= localStorage.getItem("Last name");
  var dateOfBirth= localStorage.getItem("Date of birth");
  var gender= localStorage.getItem("Gender");
  var email= localStorage.getItem("Email");
  var securityQue= localStorage.getItem("Security Question");
  var securityAns= localStorage.getItem("Security Answer");
  var address= localStorage.getItem("Address");
  var city= localStorage.getItem("City");
  var state= localStorage.getItem("State");
  var zipCode= localStorage.getItem("Zip code");
  var optionalZipCode= localStorage.getItem("Optioanal Zip Code");
  var number=localStorage.getItem("Phone Number");

  document.getElementById("td1").innerHTML= firstName ; 
  document.getElementById("td2").innerHTML= lastName ; 
  document.getElementById("td3").innerHTML= dateOfBirth ;  
  document.getElementById("td4").innerHTML= gender ;  
  document.getElementById("td5").innerHTML= email ;
  document.getElementById("td6").innerHTML= securityQue ;  
  document.getElementById("td7").innerHTML= securityAns ;  
  document.getElementById("td8").innerHTML= address ;  
  document.getElementById("td9").innerHTML= city ;
  document.getElementById("td10").innerHTML= state ;  
  document.getElementById("td11").innerHTML= zipCode ;  
  document.getElementById("td12").innerHTML=optionalZipCode ; 
  document.getElementById("td13").innerHTML= number ;
}