<template>
<div>
    <input type="text" :value="value" @input="handleInput">
</div>
</template>

<script>
export default {
    name:'CustomInput',
    props:['value'],
    methods: {
        handleInput() {
            this.$emit('input', $event.target.value)
        }
    }
}
</script>


<style lang="scss" scoped>

</style>