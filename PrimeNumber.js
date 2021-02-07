// a number that is divisible only by itself and 1 (e.g. 2, 3, 5, 7, 11).
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(20));
// console.log(isPrime(17));
// console.log(isPrime(12));
console.log(isPrime(0));
console.log(isPrime(-1));
console.log(isPrime(2));
