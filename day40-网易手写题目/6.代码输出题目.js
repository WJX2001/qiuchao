const arr1 = [1,2,3];

const arr2 = [1,2,3];

console.log(arr1 === arr2);// 这里会输出什么 false 引用类型 所以不相等

const arr3 = arr2 

arr2[1] = 4

console.log(arr3); // 这里会输出什么 [1,4,3] 因为arr3和arr2指向同一个数组 使用同一块内存