let arr = [1, 3, 5, 7, 2, 4, 6, 8],
  k = 4
function GetLeastNumbers_Solution(input, k) {
  // write code here
  let tmpArr = input.sort((a, b) => a - b)
  let a = tmpArr.substring(0, k)
  return a
}

console.log(GetLeastNumbers_Solution(arr, k))
