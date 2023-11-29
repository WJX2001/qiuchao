<template>
  <div>
    <h2 @click="showName">学校名字</h2>
  </div>
</template>

<script >
import { mixin } from '../mixin'
export default {
  name: 'StudentComp',
  data () {
    return {
      name: 'wjx',
      age: '18'
    }
  },
  mixins: [mixin]

}
</script>

<style lang="scss" scoped>
</style>