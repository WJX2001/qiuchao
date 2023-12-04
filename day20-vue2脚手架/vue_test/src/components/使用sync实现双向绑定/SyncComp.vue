<template>
  <div>
    <!-- 子组件使用myPropName 并通过$emit来更新父组件中的值 -->
    <input type="text" v-model="internalProp" style="width: 200px" />
  </div>
</template>

<script>
export default {
  name: 'SyncComp',
  props: {
    myPropName: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      internalProp: this.myPropName
    }
  },
  watch: {
    // 监听内部数据变化 并通过 $emit 更新父组件中的值
    internalProp (newVal) {
      this.$emit('update:myPropName', newVal)
      console.log('输入框值变化了', newVal)
    },
    myPropName (newVal) {
      this.internalProp = newVal
    }
  }
}
</script>


<style lang="less" scoped>
</style>