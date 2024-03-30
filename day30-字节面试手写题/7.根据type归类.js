let list2 = [
  {
    "name": "古风",
    "type": "风格",
  },
  {
    "name": "放松",
    "type": "情感",
  },
  {
    "name": "民谣",
    "type": "风格",
  },
  {
    "name": "电子",
    "type": "风格",
  },
  {
    "name": "轻音乐",
    "type": "风格",
  },
  {
    "name": "欧美",
    "type": "语种",
  },
  {
    "name": "华语",
    "type": "语种",
  }
]


const res = list2.reduce((acc,cur) => {
  acc[cur.type] = acc[cur.type] ? [...acc[cur.type],cur.name] : [cur.name]
  return acc
},{})

console.log(res);