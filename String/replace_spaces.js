function repalce_Spaces(str){
    let result = "";
    for(let i =0;i<str.length;i++){
        if(str[i] === " "){
            result += "-"
        }
        else {
            result += str[i]
        }
    }
    return result
}
console.log(repalce_Spaces("udaya hasini"));
