 function lengthOfLongestSubstring(s) {
  let startPointer = 0;
  let nextPointer = 0;
  const hashMap = {};
  let max = 0;

  while (nextPointer < s.length) {
    if (hashMap[s[nextPointer]] === undefined) {
      hashMap[s[nextPPointer]] = nextPointer;
      nextPointer++;
      max = Math.max(max, Object.entries(hashMap).length);
    } else {
      delete hashMap[s[startPointer]];
      startPointer++;
    }
  }

  return max;
}
lengthOfLongestSubstring('aba');
bca
