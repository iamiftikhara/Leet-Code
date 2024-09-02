// **** Two SUM ****
// Given an array of integers, return indices of the two numbers such that 
// they add up to a specific target.
// ** You may assume that each input would have exactly one solution, and you
// may not use the same element twice.

// *** Example ***
// ** num = [2, 7, 11, 15];
// ** target = 9;
// ** Because num[0] + num[1] = 2 + 7 = 9
// ** return [0, 1].


// let num = [2, 7, 11, 15];
// let target = 9;

// let num = [2, 3, 4];
// let target = 6;

let num = [-1,0];
let target = -1;

// *** SOLUTION No.1 ***
function twoSum_fun1(arr, target){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === target){
                return [i, j];
            }
        }
    }
}

// console.log(twoSum_fun1(num, target));

// *** SOLUTION No.2 ***

function twoSum_fun2(arr, target){
    for(let i = 0; i < arr.length; i++){
        newTarget = target - arr[i];
        let k = i + 1;
        let j = arr.length - 1;
        while(k <= j){
            let mid = Math.floor( (k + j) / 2);
            console.log("mid: ", mid, "new target: ", newTarget, " K: ",k, " j: ", j );
            if(arr[mid] === newTarget){
                // return [k, j + 1];
                return [i, mid];

            }
            else if(arr[mid] < newTarget){
                k = mid + 1;
            }
            else{
                j = mid - 1;
            }
            console.log(k, j, "k, j")
        }
    }
}

console.log(twoSum_fun2(num, target));
