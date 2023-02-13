function fieldValidation(displayField) {
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("moNumber").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (/[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email) && /^(\+\d{1,3}[- ]?)?\d{10}$/ .test(mobile)) {
      displayField(email , mobile, firstName, lastName);
    }
    else{
        alert("enter valid details")
    }
}
function displayField(email, mobile, lastName, firstName ) {
console.log(firstName, lastName, email, mobile);
}

