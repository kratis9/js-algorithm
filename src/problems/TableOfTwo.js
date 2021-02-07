function tableOfTwo() {
  let tableString = "";
  for (i = 1; i <= 10; i++) {
    tableString = tableString + `2 * ${i} = ${2 * i} \n`;
  }
  console.log(tableString);
}
tableOfTwo();
