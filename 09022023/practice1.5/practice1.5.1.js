var ipString = "25525511135";
// var ipLength = ipString.length;

var storeIpAddress = function(ipStr){
    var result=[];
    var length=ipStr.length;
    var str1="";
    var str2="";
    var str3="";
    var str4="";

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++){
            for (let k = 1; k <= 3; k++){
                for (let l = 1; l <= 3; l++) {
                    str1=ipStr.substr(0,i);
                    str2 = ipStr.substr(i, j);
                    str3 = ipStr.substr(i + j, k);
                    str4 = ipStr.substr(i + j + k, l);
                    if(i+j+k+l === length 
                    && isValid(str1)
                    && isValid(str2)
                    && isValid(str3)
                    && isValid(str4)){
                        result.push(str1 + '.' + str2 + '.' + str3 + '.' + str4)
                    }
                }
                
            }
            
        }
        
    }
    return result;
};

var isValid = function (ipStr) {
    if (ipStr.length > 1 && ipStr[0] === '0') return false;
    if (Number(ipStr) > 255) return false;
    return true;
  };
  console.log(storeIpAddress(ipString));
