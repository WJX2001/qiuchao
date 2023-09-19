// let t = parseInt(readline())
// while (t) {
//   const arr = []
//   let n, m
//   const line1 = readline()
//   n = parseInt(line1.split(' ')[0])
//   m = parseInt(line1.split(' ')[1])
//   let cur = m
//   while (cur) {
//     let k = parseInt(readline())
//     let tempArr = new Array(n + 1).fill(0)
//     while (k) {
//       const line2 = readline()
//       const left = parseInt(line2.split(' ')[0])
//       const right = parseInt(line2.split(' ')[1])
//       for (let i = left; i <= right; i++) {
//         tempArr[i] = 1
//       }
//       k--
//     }
//     arr.push(tempArr)
//     cur--
//   }
//   const res = []
//   for (let i = 1; i <= n; i++) {
//     let flag = 1
//     for (let j = 0; j < m; j++) {
//       if (arr[j][i] == 0) {
//         flag = 0
//       }
//     }
//     if (flag) {
//       res.push(i)
//     }
//   }
//   print(res.length)
//   print(res.join(' '))
//   t--
// }

function dom2json() {
  const fn = (node) => {
    const obj = {
      tag: node.nodeName.toLowerCase(),
      attributes: [].reduce.call(
        node.attributes,
        (acc, cur) => {
          acc[cur.nodeName] = cur.value
          return acc
        },
        {}
      ),
      children: Array.from(node.childNodes).reduce((acc, cur) => {
        if (cur.nodeName === '#text') {
          const context = cur.nodeValue.trim()
          if (context)
            acc.push({
              tag: 'text',
              context: context,
            })
        } else acc.push(fn(cur))
        return acc
      }, []),
    }
    return obj
  }
  return fn(jsContainer)
}
