
// TODO: 实现数组的乱序输出
function shufflearr (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1 - i) + 1);
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
  }
  return arr

}

console.log(shufflearr([1, 2, 3, 4, 5]))