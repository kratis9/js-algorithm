function reverse(num) {
 let revNum =  Number(String(Math.abs(num))
    .split("")
    .reverse()
    .join("")) //?
    return num <0 ? -revNum : revNum
}

console.log(reverse(-654321));
