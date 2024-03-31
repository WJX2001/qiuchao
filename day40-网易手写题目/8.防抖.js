function myDebounce (func, wait) {
  let timer = null

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

function myDebounce1 (func, wait,immediate) {
  let timer = null

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }

    if(immediate && !timer) {
      func.apply(this, args)
    }


    timer = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}



