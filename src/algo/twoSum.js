function twoSum(arr, target) {
    let pairs = [];
    let hashTable = {}; 
  //[8,3,5,1,2] 5
  //{}
    for (let index = 0; index < arr.length; index++) {
      const currNum = arr[index];//2
      const counterpart = target - currNum; //5-2=3
      if (hashTable[counterpart] !== undefined) {// milla
        pairs.push(index);
        pairs.push(hashTable[counterpart]);//[4,1]
      }
      hashTable[currNum] = index;//{8:0, 3:1,5:2,4:3,2,4}
    }
    return pairs;
  }