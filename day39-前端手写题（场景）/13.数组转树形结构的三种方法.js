// 数组转树形结构
let obj = {
  'city': [
    { "id": 12, "parent_id": 1, "name": "朝阳区" },
    { "id": 241, "parent_id": 24, "name": "田林街道" },
    { "id": 31, "parent_id": 3, "name": "广州市" },
    { "id": 13, "parent_id": 1, "name": "昌平区" },
    { "id": 2421, "parent_id": 242, "name": "上海科技绿洲" },
    { "id": 21, "parent_id": 2, "name": "静安区" },
    { "id": 242, "parent_id": 24, "name": "漕河泾街道" },
    { "id": 22, "parent_id": 2, "name": "黄浦区" },
    { "id": 11, "parent_id": 1, "name": "顺义区" },
    { "id": 2, "parent_id": 0, "name": "上海市" },
    { "id": 24, "parent_id": 2, "name": "徐汇区" },
    { "id": 1, "parent_id": 0, "name": "北京市" },
    { "id": 2422, "parent_id": 242, "name": "漕河泾开发区" },
    { "id": 32, "parent_id": 3, "name": "深圳市" },
    { "id": 33, "parent_id": 3, "name": "东莞市" },
    { "id": 3, "parent_id": 0, "name": "广东省" }
  ]
}

function arrayToTreeV3 (list, root) {
  return list.filter(item => item.parent_id === root).map((item) => ({
    ...item,
    children: arrayToTreeV3(list, item.id)
  }))
}

console.log(arrayToTreeV3(obj.city, 0))