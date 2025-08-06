function countingSort(arr) {
  let max = Math.max(...arr);

  let count = new Array(max + 1).fill(0);

  for (let num of arr) {
    count[num]++;
  }

  let result = []

  for(let i =0;i<count.length;i++){
      while (count[i] > 0) {
      result.push(i);
      count[i]--;
    }
  }
  
  return result;
}

console.log(countingSort([2,3,3,4,5,6,7,8,2]));

