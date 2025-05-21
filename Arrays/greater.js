function countGreaterThan(arr, num) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > num) {
        count++;
      }
    }
  
    return count;
  }
  

  console.log(countGreaterThan([5, 10, 15, 2, 30], 10)); 
  