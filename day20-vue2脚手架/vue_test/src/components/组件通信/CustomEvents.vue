<template>
  <div>
    <h1>我是儿子组件,我是通过自定义事件传值</h1>
    <button @click="sendToFather">点我给父亲传值</button>
    <div></div>
    <hr />
  </div>
</template>
<script>
export default {
  name: 'CustomEvents',
  methods: {
    sendToFather () {
      this.$emit('getSonName', '父王我来了')
    }
  }

}
</script>


<style lang="less" scoped>
</style>