// TODO: 一个数组打乱顺序，不在原来的位置

function shuffleArray (array) {
  let length = array.length
  for (let i = length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * i)
    let tmp = array[i]
    array[i] = array[randomIndex]
    array[randomIndex] = tmp
  }

  return array

}


let arr = [1, 2, 3, 4, 5]
console.log(shuffleArray(arr))