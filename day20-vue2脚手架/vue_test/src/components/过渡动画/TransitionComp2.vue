<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear name="hello">
      <h1 v-show="isShow">过渡版本</h1>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'TransitionComp1',
  data () {
    return {
      isShow: true
    }
  }
}
</script>


<style scoped>
h1 {
  background-color: red;
}

/* 进入的起点 */
.hello-enter,
.hello-leave-to {
  transform: translateX(-100%);
  transition: 0.5s linear;
}

/* 进入的终点 */
.hello-enter-to,
.hello-leave {
  transform: translateX(0);
}
</style>