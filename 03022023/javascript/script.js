function first_radio() {
  if (document.getElementById("medical_1").checked) {
    document.getElementById("result").innerHTML =
      "<span >if yes, spouse date of birth?(DD/MM/YY)</span>" +
      '<input type="date"></input>' +
      "<br>" +
      '<span>insurance company</span>'+
      '<input type="text">'+'<br>'+
      '<span>policy number</span>'+ 
      '<input type="text">'+'<br>'+
      '<span>certificate number</span>' + 
      '<input type="text">'+'<br>';
  } 
  else {
    document.getElementById("result").innerHTML = "";
  }
}

function second_radio() {
    if (document.getElementById("accident_1").checked) {
      document.getElementById("result2").innerHTML =
        "<span >if yes, Date Of accident</span>" +
        '<input type="text"></input>' +
        "<br>" +
        "<span>Location of accident</span>" +
        '<input type="radio" name="loa">'+'<label>Work</label>'+
        '<input type="radio" name="loa">'+'<label>Home</label>'+
        '<input type="radio" name="loa">'+'<label>Other</label>';
    } 
    else {
      document.getElementById("result2").innerHTML = "";
    }
  }
  
  function addNewField(){
    var table = document.getElementById("myTable");
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.innerHTML='<input type="text" name="" id="">'
    cell2.innerHTML='<input type="date" name="" id="">'
    cell3.innerHTML='<input type="text" name="" id="" style="width: 100%;">'
    cell4.innerHTML='<input type="text" name="" id="">'
  }
