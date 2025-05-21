let str = "i am udaya";
let count = 0;
const vowels = ["a", "e", "i", "o", "u"];

for (let s of str.toLocaleLowerCase()) {
  if (vowels.includes(s)) {
    count++;
  }
}
console.log(count);
