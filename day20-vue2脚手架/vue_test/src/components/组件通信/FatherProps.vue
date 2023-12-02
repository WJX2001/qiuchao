<template>
  <div>
    <h1>我是儿子组件,我是通过父亲给我的props传值</h1>
    <button @click="sendToFather">点我给父亲传值</button>
    <div></div>
    <hr />
  </div>
</template>


<script>
export default {
  name: 'FatherProps',
  props: ['getSonName'],
  methods: {
    sendToFather () {
      this.getSonName('我是儿子哦！！！')
    }
  }
}
</script>

<style lang="less" scoped>
</style>