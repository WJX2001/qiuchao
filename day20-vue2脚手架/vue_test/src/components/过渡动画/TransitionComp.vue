
<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <h1 v-show="isShow" style="color: orange">你好啊</h1>
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


<style lang="less" scoped>
</style>