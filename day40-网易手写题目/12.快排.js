function quickSort (arr) {
  const rec = (arr) => {
    if (arr.length <= 1) return arr
    let left = []
    let right = []
    let mid = arr[0]

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]
  }
  return rec(arr)
};


let arr = [49, 38, 65, 97, 76, 13, 27, 49]

console.log(quickSort(arr))