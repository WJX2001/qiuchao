// const smallestSub = function(s) {
//     const count = new Array(26).fill(0)
//     const visited = new Array(26).fill(false)
//     const stack = []

//     // 统计每个字符出现的个数
//     for(const char of s) {
//         count[char.charCodeAt(0) - 'a'.charCodeAt(0)] ++
//     }

//     for(const char of s) {
//         count[char.charCodeAt(0) - 'a'.charCodeAt(0)] --
//         if(visited[char.charCodeAt(0) - 'a'.charCodeAt(0)]){
//             continue
//         }

//         while (
//             stack.length >0 && char < stack[stack.length-1] && count[stack[stack.length-1].charCodeAt(0)-'a'.charCodeAt(0)] >0
//         ) {
//             visited[stack.pop().charCodeAt(0) - 'a'.charCodeAt(0)] = false
//         }
//         stack.push(char)
//         visited[char.charCodeAt(0) - 'a'.charCodeAt(0)] = true
//     }
//     return stack.join('')
// }

// const inputString = 'abcdbab'

// console.log(smallestSub(inputString))


// function smallSub(s){
//     const uniqueChars = [...new Set(s.split(''))]
//     uniqueChars.sort()
//     return uniqueChars.join('')
// }

// const inputString = 'bcdbab'
// console.log(smallSub(inputString))

// function minimumFlips(s) {
//     const n = s.length
//     const prefixZeros = Array(n+1).fill(0)
//     const siffixOnes = Array(n+1).fill(0)

//     // 计算前缀中的0和后缀中的1的数量
//     for(let i=0;i<n;i++) {
//         prefixZeros[i+1] = prefixZeros[i] +(s[i] === '0' ?1:0)
//         siffixOnes[n-i-1] = siffixOnes[n-1]+(s[n-i-1] === '1'?1:0)
//     }

//     let minFlips = n // 初始化最小翻转次数为字符串长度

//     // 枚举分割点
//     for(let i=0;i<=n;i++) {
//         const flips = prefixZeros[i]+siffixOnes[i]
//         minFlips = Math.min(minFlips,flips)
//     }
    
//     return minFlips

// }

// function matrixSum(n, operations) {
//     let array = new Array(n).fill(0).map(() => new Array(n).fill(0))
//     for(let i=0;i<operations.length;i++) {
//         let type = operations[i][0] // type
//         let index = operations[i][1] // index
//         let val = operations[i][2]  // val
        
//         if(type === 0) {
//             // 将 index行所有元素变为 val
//             for(let i=0;i<n;i++) {
//                 array[index][i] = val
//             }
//         }

//         if(type === 1){
//             for(let i=0;i<n;i++) {
//                 // 将列变为 val
//                 array[i][index] = val
//             }
//         }
//     }
//     return sum(array)
// }

// function sum(martix) {
//     let sum = 0
//     for(let i=0;i<martix.length;i++) {
//         for(let j=0;j<martix[i].length;j++) {
//             sum += martix[i][j]
//         }
//     }
//     return sum
// }


const n = s.length
let flipWith0 = 0
let flipWith1 = 0

for(let i=0;i<n;i++) {
    if(i%2 ===0 && s[i]!=='0') {
        flipWith0++
    }else if(i%2 !== 0 && s[i]!=='1') {
        flipWith0++
    }
}

// 前缀变为1

for(let i=0;i<n;i++) {
    if(i%2 ===0 && s[i]!=='1') {
        flipWith1++
    }else if(i%2 !== 0 && s[i]!=='0') {
        flipWith1++
    }
}
return Math.min(flipWith0,flipWith1)