function logOutInfo() {
  let sessionObj = JSON.parse(sessionStorage.getItem("session"));

  sessionObj.logOutDate = new Date().toLocaleDateString();
  sessionObj.logOutTime = new Date().toLocaleTimeString();

  let sessionArray = [];
  if (
    localStorage.getItem("sessionArray") &&
    localStorage.getItem("sessionArray").length > 0
  ) {
    let userObj = {
      name: sessionObj.name,
      loginTime: sessionObj.loginTime,
      loginDate: sessionObj.loginDate,
      logoutTime: sessionObj.logOutTime,
      logoutDate: sessionObj.logOutDate
    };
    let oldSessionStorage = JSON.parse(localStorage.getItem("sessionArray"));
    oldSessionStorage.push(userObj);
    localStorage.setItem("sessionArray", JSON.stringify(oldSessionStorage));
  }
  else{
    let userObj = {
        name: sessionObj.name,
        loginTime: sessionObj.loginTime,
        loginDate: sessionObj.loginDate,
        logoutTime: sessionObj.logOutTime,
        logoutDate: sessionObj.logOutDate
      };
      sessionArray.push(userObj);
      localStorage.setItem("sessionArray", JSON.stringify(sessionArray));
  }
  return true;
}
