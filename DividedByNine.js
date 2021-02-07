function divideByNine() {
  for (let i = 0; i <= 1000; i++) {
    if (i % 9 === 0 && i % 13 === 0) {
      console.log(i);
    }
  }
}
divideByNine();
