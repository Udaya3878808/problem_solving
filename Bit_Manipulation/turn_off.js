function turnOffRightmostSetBit(n){
    return n&(n-1)
}

console.log(turnOffRightmostSetBit(12));
