// TODO: 冒泡排序 基础版本
let arr = [1, 5, 7, 4, 2, 3]

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}
console.log(bubbleSort(arr))

// TODO: 改进版

function bubbleSort1(arr) {
  let i = arr.length - 1

  while (i > 0) {
    let pos = 0
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    i = pos
  }
  return arr
}
