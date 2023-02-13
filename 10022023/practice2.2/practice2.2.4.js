
function calcAge(dob) { 
    var msDiff = Date.now() - dob.getTime();
    // console.log(msDiff);
    var age_dt = new Date(msDiff); 
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

console.log(calcAge(new Date(2002, 04, 21)));
