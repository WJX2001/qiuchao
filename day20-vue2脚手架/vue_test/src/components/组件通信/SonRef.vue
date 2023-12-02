<template>
  <div>
    <h1>我是儿子组件,我是通过父组件调我的ref传值</h1>
    <button @click="sendToFather">点我给父亲传值</button>
    <div></div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'SonRef',
  methods: {
    communacateByRef () {
      console.log('恭喜你通过ref调用我了')
    },
    sendToFather () {
      this.$emit('getSonName', '父王我通过ref给的自定义事件来了')
    }
  },
}
</script>


<style lang="less" scoped></style>