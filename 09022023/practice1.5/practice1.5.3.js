var nums = [1,2,0];
var maxNum = Math.max(...nums);
for(var i=1;i<=maxNum+1;i++){
    if(!nums.includes(i)){
        console.log(i);
        return;
    }
}