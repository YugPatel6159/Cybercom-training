let nums = [1,2,2];
let ans = [[]];
let part = [];
let n = 0;
while(n < nums.length){
    for (let i = 1; i <= nums.length; i++) {
        for (let j = n; j < i; j++) {   
            if(j < nums.length){
                part.push(nums[j]);
            }
        }   
        if(!ans.includes(part)){
            ans.push(part)
        }
        part = [];
    }
    n++
};

const uniqueArrayOfArrays = [...new Set(ans.map(JSON.stringify))].map(JSON.parse);
console.log(uniqueArrayOfArrays);