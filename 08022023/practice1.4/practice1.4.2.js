let stringToCheck = "<html><head></head><input/><body></body></html>";
let strLength = stringToCheck.length;
firstIndex = 0;
lastIndex = 0;
var strArr = [];
// let i =0;
while (strLength!=0) {
    strLength = stringToCheck.length;
    // console.log(inputString,strLength);
  var firstIndex = stringToCheck.indexOf("<");
  var lastIndex = stringToCheck.indexOf(">");
  let tagText = stringToCheck.substring(firstIndex + 1, lastIndex);
  if(tagText[tagText.length-1]=="/"){
  }
  else
  if(tagText[0]=='/'){
    subStringOfTag = tagText.slice(1);
    if(strArr.find(e => e===subStringOfTag)){
        // console.log(subStringOfTag);
    strArr.pop();
    }else{
        strArr.push(tagText);
    }
  }
  else{
      strArr.push(tagText); 
    //   console.log(strArr);
  }
  stringToCheck = stringToCheck.slice(lastIndex + 1);
//   i++;
};
if(strArr.length==1){
    console.log("valid");
}else{
    console.log("invalid");
}

