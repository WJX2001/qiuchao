// var a = ?;
// if(a == 1 && a == 2 && a == 3){
//  	console.log(1);
// }

// TODO: 考察 隐式转换 我们重新 toString方法 即可

var a = {
  i: 1,
  toString() {
    return a.i++
  },
}

if (a == 1 && a == 2 && a == 3) {
  console.log(1)
}
