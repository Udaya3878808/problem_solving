function Zig_ZagSort(arr){
    for(let i =0;i<arr.length-1;i++){
        if(i%2 === 0){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
            } else {
                if(arr[i] < arr[i+1]){
                    let temp = arr[i]
                    arr[i] = arr[i+1]
                    arr[i+1] = temp
                }
            }
        }
    }
    return arr
}
console.log(Zig_ZagSort([4,3,7,8,6,2,1]));
