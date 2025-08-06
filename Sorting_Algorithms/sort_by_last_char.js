function sortByLastChar(arr){
for(let i =0;i<arr.length-1;i++){
    for(let j = i+1;j<arr.length;j++){
        if(arr[i][arr[i].length -1] > arr[j][arr[j].length-1]){
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}
return arr
}
console.log(sortByLastChar(["bat","apple","cat","dog"]));
