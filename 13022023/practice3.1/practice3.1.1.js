let fieldValidation = () => {
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("moNumber").value;
//   var firstName = document.getElementById("firstName").value;
//   var lastName = document.getElementById("lastName").value;
  var myPromise= new Promise((resolve, reject) => {
    if (
      /[^\s@]+@[^\s@]+\.[^\s@]+/gi.test(email) &&
      /^(\+\d{1,3}[- ]?)?\d{10}$/.test(mobile)
    ) {
      resolve("invalid details");
    } else {
      reject("enter valid details");
    }
  });
  myPromise
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
