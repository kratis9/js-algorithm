function isPalindrome(string) {
  // Write your code here.
  const array = string.split('')
  let leftIdx = 0
  let rightIdx = array.length - 1
  while (leftIdx < rightIdx) {
    if (array[leftIdx] !== array[rightIdx]) {
      return false
    }
    leftIdx++
    rightIdx--
  }
  return true
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome

isPalindrome('rar') //?
