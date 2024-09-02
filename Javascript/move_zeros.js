function moveZeros(arr){
    let noneZeroIndex = 0
    for (let i in (arr)){
        if(arr[i] != 0){
            let temp = arr[noneZeroIndex]
            arr[noneZeroIndex] = arr[i]
            arr[i] = temp
            noneZeroIndex ++
        }
    }
}


let arr = [0,1,0,2,12]
moveZeros(arr)
console.log(arr)