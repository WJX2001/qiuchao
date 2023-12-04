<template>
  <div>
    <TransitionComp1></TransitionComp1>
    <TransitionComp2></TransitionComp2>
    <test1Vue>
      <template slot="slot1">
        <div>传给插槽1</div>
      </template>

      <template scope="dataScope">
        这是子组件通过作用于给我的：{{ dataScope.data }}
      </template>
    </test1Vue>
  </div>
</template>

<script>
import test1Vue from '../插槽/test1.vue'
import TransitionComp1 from '../过渡动画/TransitionComp1.vue'
import TransitionComp2 from '../过渡动画/TransitionComp2.vue'

export default {
  name: 'EntryComp1',
  components: {
    TransitionComp1,
    TransitionComp2,
    test1Vue
  }
}

</script>


<style lang="scss" scoped>
</style>