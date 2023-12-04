<template>
  <div>
    <TransitionComp1></TransitionComp1>
    <TransitionComp2></TransitionComp2>
  </div>
</template>

<script>
import TransitionComp1 from '../过渡动画/TransitionComp1.vue'
import TransitionComp2 from '../过渡动画/TransitionComp2.vue'
export default {
  name: 'EntryComp1',
  components: {
    TransitionComp1,
    TransitionComp2
  }
}

</script>


<style lang="scss" scoped>
</style>