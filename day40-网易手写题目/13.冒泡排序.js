function bubbleSort (arr) {
  const len = arr.length
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var tmp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = tmp
      }
    }
  }
  return arr
}

let arr = [ 12,35,99,18,76]
console.log(bubbleSort(arr))
