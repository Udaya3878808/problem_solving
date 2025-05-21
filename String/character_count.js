function countCharacters (str){
    let count = 0;
    while(str[count] !== undefined){
        count ++
    }
    return count;
}
console.log(countCharacters("hello"));
