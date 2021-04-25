function sortedSquaredArray(array) {
  // Write your code here
  let newArray = new Array(array.length).fill(0)
  let smallestIdx = 0
  let largestIdx = array.length - 1

  for (let index = array.length - 1; index >= 0; index--) {
    let smallerValue = array[smallestIdx]
    let largerValue = array[largestIdx]
    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      newArray[index] = smallerValue * smallerValue
      smallestIdx++
    } else {
      newArray[index] = largerValue * largerValue
      largestIdx--
    }
  }

  return newArray
}

console.log(sortedSquaredArray([-9, -1, 1, 3]))
//exports.sortedSquaredArray = sortedSquaredArray
