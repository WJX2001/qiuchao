<template>
    <div class="container">
        <h1>{{count}}</h1>
        <button @click="add">你点我啊</button>
    </div>
</template>



<script>
    export default{
        data() {
            return {
                count:0
            }
        },
        methods: {
            add() {
                this.count++
            }
        }
    }
</script>

<style scoped>

</style>