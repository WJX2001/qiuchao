<template>
  <div>
    <h1>默认插槽</h1>
    <slot>你要不写 我就出来了</slot>
    <hr />

    <h1>具名插槽</h1>
    <slot name="slot1">我是具名插槽1</slot>
    <hr />

    <slot name="slot2">我是具名插槽2</slot>

    <h1>作用域插槽</h1>
    <slot :data="msg">作用域插槽</slot>
  </div>
</template>

<script>
export default {
  name: 'test1Comp',
  data () {
    return {
      msg: '这是作用域插槽要传递的数据'
    }
  }
}

</script>