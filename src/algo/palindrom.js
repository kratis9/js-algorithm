export function isPalindrom(s) {
  let str = s.toLowerCase().replace(/[\W_]/g, "");
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
 
}





/*

a r v i n d
0 1 2 3 4 5
^         ^

left =0
right=5


*/