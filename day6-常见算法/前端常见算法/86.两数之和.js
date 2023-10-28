// nums = [2, 7, 11, 15], target = 9

let nums = [2, 7, 11, 15]
let target = 9

function anwser(arr, target) {
  let valid = new Map()

  for (let i = 0; i < arr.length; i++) {
    let need = target - arr[i]
    if (valid.has(need)) {
      return [valid.get(need), i]
    }
    valid.set(arr[i], i)
  }
  return null
}

console.log(anwser(nums, target))
