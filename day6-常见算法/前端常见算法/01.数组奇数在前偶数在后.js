var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.sort(function (a, b) {
  if (a % 2 === 0 && b % 2 === 1) {
    return 1
  } else if (a % 2 === 1 && b % 2 === 0) {
    return -1
  } else {
    return 0
  }
})
console.log(arr)
