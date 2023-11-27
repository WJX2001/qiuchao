<template>
  <div class="demo">
    <h1>Hello World</h1>
    <h2>学校名称：{{ schoolName }}</h2>
  </div>
</template>


<script>
// 组件交互相关的代码（数据，方法）
export default {
  name: 'School',
  data () {
    return {
      schoolName: '北京邮电大学'
    }
  },
  methods: {
    showName () {
      return this.schoolName
    }
  }
}


</script>

<style>
/* 组件的样式 */
</style>