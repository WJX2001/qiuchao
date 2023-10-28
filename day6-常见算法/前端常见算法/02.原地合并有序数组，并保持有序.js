const array1 = [1, 3, 5, 7]
const array2 = [2, 4, 6, 8]

// 原地合并
function mergeArray(arr1, arr2) {
  let p1 = arr1.length - 1
  let p2 = arr2.length - 1
  let p = arr1.length + arr2.length - 1 // 合并后的数组的指针

  while (p1 >= 0 && p2 >= 0) {
    if (arr1[p1] > arr2[p2]) {
      arr1[p] = arr1[p1]
      p1--
    } else {
      arr1[p] = arr2[p2]
      p2--
    }
    p--
  }

  while (p2 >= 0) {
    arr1[p] = arr2[p2]
    p2--
    p--
  }

  return arr1
}

console.log(mergeArray(array1, array2))
