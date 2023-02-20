let adminName = JSON.parse(localStorage.getItem("admin")).name
document.getElementById("hello").innerHTML="Hello"+ adminName;
document.getElementById("hello").style.color="white";

function addUser() {
   
  let name = document.getElementById("nameU").value;
  let email = document.getElementById("emailU").value;
  let pass = document.getElementById("passU").value;
  let dob = document.getElementById("dateU").value;
  let id = Math.floor(Math.random()*1000);



  // for calculation of age 
  let dateOfBirth = new Date(dob);
  let msDiff = Date.now() - dateOfBirth;
  let age_dt = new Date(msDiff);
  let ageU = Math.abs(age_dt.getUTCFullYear() - 1970);


  // for appending objects into array in localStorage

  let userInfo = [];
  if (
    localStorage.getItem("users") &&
    localStorage.getItem("users").length > 0
  ) {
    let user = {
      name: name,
      email: email,
      password: pass,
      dateOfBirth: dob,
      age: ageU,
      id:id
    };
    let oldData = JSON.parse(localStorage.getItem("users"));
    oldData.push(user);
    if(name&&email&&pass&&dob&&ageU){
      localStorage.setItem("users", JSON.stringify(oldData));
    }
  } else {
    let user = {
      name: name,
      email: email,
      password: pass,
      dateOfBirth: dob,
      age: ageU,
      id: id
    };
    userInfo.push(user);
    localStorage.setItem("users", JSON.stringify(userInfo));
  }
  return true;
}

function userDataShow() {
  let userLocalData = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < userLocalData.length; i++) {
    let userName = userLocalData[i].name;
    let userEmail = userLocalData[i].email;
    let userPass = userLocalData[i].password;
    let userDob = userLocalData[i].dateOfBirth;
    let userAge = userLocalData[i].age;
    let userId = userLocalData[i].id;

    var table = document.getElementById("userTable");
    var row = table.insertRow();
    row.insertCell(0).innerHTML = userName;
    row.insertCell(1).innerHTML = userEmail;
    row.insertCell(2).innerHTML = userPass;
    row.insertCell(3).innerHTML = userDob;
    row.insertCell(4).innerHTML = userAge;
    row.insertCell(5).innerHTML = `<button id="edtBtn" onclick="editData(${userId})">Edit</button><button id="delete" onclick="deleteData(${userId})">Delete</button>`;
  }
}

function update(index){
  let localData = JSON.parse(localStorage.getItem('users'));

  let tempName = document.getElementById("nameU").value;
  let tempEmail = document.getElementById('emailU').value;
  let tempPassword = document.getElementById('passU').value;
  let tempDate = document.getElementById('dateU').value;

  localData[index].name= tempName;
  localData[index].email= tempEmail;
  localData[index].password= tempPassword;
  localData[index].dateOfBirth= tempDate;
  console.log(localData[index].name);
  localStorage.setItem("users",JSON.stringify(localData));
}

function editData(userId){
    document.getElementById("heading").textContent="Update User";
    document.getElementById("addBtn").innerHTML="Update";
    let localData = JSON.parse(localStorage.getItem('users'));

for(i=0;i<localData.length;i++){
  if(userId === localData[i].id){
    document.getElementById("nameU").value = localData[i].name;
    document.getElementById("emailU").value=localData[i].email;
    document.getElementById("passU").value=localData[i].password;
    document.getElementById("dateU").value=localData[i].dateOfBirth;
    document.getElementById('addBtn').setAttribute('onclick', `update(${i})`);
    return true;
      }     
  }
}

function deleteData(userId){
  let userData = JSON.parse(localStorage.getItem('users'));
  for(let i=0;i<userData.length;i++){
    if(userId === userData[i].id){
      userData.splice(i,1);
      localStorage.setItem("users",JSON.stringify(userData));
      location.reload();
        }
      }
}
userDataShow();
