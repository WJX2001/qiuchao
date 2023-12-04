
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition>

    <transition appear name="h2">
      <h1 v-show="isShow">你好啊</h1>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'TransitionComp',
  data () {
    return {
      isShow: true
    }
  }
}
</script>


<style scoped>
h1 {
  background-color: orange;
}

.v-enter-active {
  animation: test1 1s;
}

.v-leave-active {
  animation: test1 1s reverse;
}

.h2-enter-active {
  animation: test1 1s reverse;
}

.h2-leave-active {
  animation: test1 1s;
}

@keyframes test1 {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>