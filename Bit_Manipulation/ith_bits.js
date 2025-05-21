function isIthBitSet(n,i){
    return (n&(1<<i)) !== 0
}
console.log(isIthBitSet(10,0));
