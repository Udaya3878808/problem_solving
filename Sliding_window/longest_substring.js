function longestKUnique(s,k) {
    let map = {}
    let left=0;maxLen = -1

    for(let r= 0;r<s.length;r++){
      map[s[r]] = (map[s[r]] || 0) + 1


      while (Object.keys(map).length > k){
        map[s[left]]--;
        if(map[s[left]] === 0) delete 
        map[s[left]]
        left++
      }
      if(Object.keys(map).length === k){
        maxLen = Math.max(maxLen,r-left + 1)
      }
    }
    return maxLen
}

console.log(longestKUnique("aasssaswdd",3));
