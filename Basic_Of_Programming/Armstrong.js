function Armstrong(n) {
  let original = n;
  let arm = 0;
  let digits = n.toString().length;
  while (n > 0) {
    let rem = n % 10;
    arm = arm = Math.pow(rem, digits);
    n = Math.floor(n / 10);
  }
  if(arm === original){
    console.log("Armstrong number ");
  }
  else {
    console.log("Not a Armstrong");
    
  }
}
Armstrong(1532)