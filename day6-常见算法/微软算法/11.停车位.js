// 创建一个空的停车场数组，用于存储车辆信息
const parkingLot = []

// 函数用于模拟车辆进入停车场
function vehicleEnter(vehicleNumber) {
  // 检查停车场是否已满
  if (parkingLot.length >= 10) {
    console.log('停车场满了，无法进入')
    return
  }

  // 检查是否已经在停车场
  const isVehicleInParkingLot = parkingLot.includes(vehicleNumber)

  if (isVehicleInParkingLot) {
    console.log('车辆已在停车场内')
  } else {
    // 将车辆添加到停车场
    parkingLot.push(vehicleNumber)
    console.log(`车辆 ${vehicleNumber} 进入停车场`)
  }
}

// 函数模拟车辆离开停车场
function vehicleExit(vehicleNumber) {
  // 检查车辆是否已经在停车场内
  const index = parkingLot.indexOf(vehicleNumber)
  if (index === -1) {
    console.log('车辆不在停车场内')
  } else {
    // 从停车场中移除车辆
    parkingLot.splice(index, 1)
    console.log(`车辆 ${vehicleNumber} 离开停车场 `)
  }
}

// TODO: 测试

//* 进入停车场
vehicleEnter('蒙E 96229')
vehicleEnter('蒙E 58688')

//* 离开停车场
vehicleExit('蒙E 58682')
