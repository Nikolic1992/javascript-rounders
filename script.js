function rounders(value) {
  value = value.toString().split("").map(Number);
  for (let i = value.length - 1; i > 0; i--) {
    if (value[i] >= 5) {
      value[i - 1]++;
    }
    value[i] = 0;
  }
  return parseInt(value.join(""));
}

console.log(rounders(15)); // Output: 20
console.log(rounders(1234)); // Output: 1000
console.log(rounders(1445)); // Output: 2000
