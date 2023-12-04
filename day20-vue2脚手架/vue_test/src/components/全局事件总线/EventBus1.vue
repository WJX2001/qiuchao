<template>
  <div>
    <h1>我是通过事件总线传值</h1>
    <button @click="sendToFather">点我给父亲传值</button>
    <div></div>
    <hr />
  </div>
</template>

<script>
export default {
  name: "EventBus1",
  methods: {
    sendToFather () {
      this.$bus.$emit('handleEventBus', '爸爸我来了')
    }
  }
}
</script>


<style lang="less" scoped>
</style>