function findFloor(arr,target){
    let start = 0;end = arr.length-1;
    let ans = -1

    while(start<=end){
        let mid= Math.floor((start+end)/2)

        if(arr[mid] === target) return arr[mid]
        if(arr[mid] < target){
            ans = arr[mid]
            start=mid+1
        } else {
            end = mid -1
        }
    }
    return ans
}

console.log(findFloor([1,2,3,4,5,5,6],8));
