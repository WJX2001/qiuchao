<template>
  <div>
    <!-- 通过父组件给子组件传递函数类型的props实现 子给父传递数据-->
    <FatherProps :getSonName="getSonName"></FatherProps>
    <!-- 通过自定义事件的方式进行操作 -->
    <custom-events @getSonName="getSonNameByCustomEvent"></custom-events>
    <!-- 通过ref的方式进行操作 -->
    <SonRef ref="sonRef"></SonRef>
    <!-- 通过事件总线的方式 -->
    <EventBus1></EventBus1>
    <!-- 使用sync实现双向绑定 -->
    <SyncCompVue :myPropName.sync="parentProp"></SyncCompVue>
    {{ parentProp }}
  </div>
</template>

<script>
import CustomEvents from '../组件通信/CustomEvents.vue'
import FatherProps from '../组件通信/FatherProps.vue'
import SonRef from '../组件通信/SonRef.vue'
import EventBus1 from '../全局事件总线/EventBus1.vue'
import SyncCompVue from '../使用sync实现双向绑定/SyncComp.vue'
export default {
  name: 'EntryComp',
  components: {
    FatherProps,
    CustomEvents,
    SonRef,
    EventBus1,
    SyncCompVue
  },
  data () {
    return {
      parentProp: '这是父组件给你的初始值'
    }
  },
  methods: {
    getSonName (value) {
      console.log(value, '以上这是儿子给我传的值')
    },
    getSonNameByCustomEvent (value) {
      console.log(value, '以上是儿子通过自定义事件给我传的值')
    }
  },
  mounted () {
    // setTimeout(() => {
    //   // 如果想只触发一次 使用once
    //   this.$refs.sonRef.$on('getSonName', this.getSonNameByCustomEvent)
    // }, 3000)

    /* 注册自定义事件 通过事件总线的方式 */
    this.$bus.$on('handleEventBus', (value) => {
      console.log(value, '传来的值是事件总线传来的')
    })

  },

  /* 销毁事件总线上的注册事件 */
  beforeDestroy () {
    this.$bus.$off('handleEventBus')
  },
}
</script>