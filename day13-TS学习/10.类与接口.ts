// TODO: 类实现接口

// 实现 implements

interface Alarm {
  alert(): void
}

class Door {}

class SecurityDoor extends Door implements Alarm {
  alert(): void {
    console.log('SecurityDoor')
  }
}

class Car implements Alarm {
  alert(): void {
    console.log('Car alert')
  }
}

// TODO: 一个类可以实现多个接口

interface Alarm {
  alert(): void
}

interface Light {
  lightOn(): void
  lightOff(): void
}

class Car1 implements Alarm, Light {
  alert(): void {
    console.log('Car alert')
  }

  lightOn(): void {
    console.log('Car light on')
  }

  lightOff(): void {
    console.log('Car light off')
  }
}
