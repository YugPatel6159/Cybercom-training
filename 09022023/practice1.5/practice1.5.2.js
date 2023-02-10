let nums =  [3,2,-4,-1];
let target = -4;

clossestSum = Number.MAX_VALUE;

for (let i = 0; i < nums.length; i++) {
    for (let j = i+1 ; j <nums.length ; j++) {
        for (let k = j+1; k < nums.length; k++) {
            if(Math.abs(target-clossestSum)>Math.abs(target-nums[i]-nums[j]-nums[k])){
                clossestSum=nums[i]+nums[j]+nums[k];
            }
        }
    }
}
console.log(clossestSum);