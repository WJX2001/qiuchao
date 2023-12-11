<template>
    <div >
        <h1>当前求和为{{$store.state.sum}}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increament">+</button>
        <button @click="decrement">-</button>
        <button @click="odd">当前求和为奇数再加</button>
        <button @click="wait">等等再加</button>
    </div>
</template>


<script>
export default {
    name: 'vuexComp1',
    data() {
        return {
            sum: 0,
            n:1
        }
    },
    methods: {
        increament() {
            // console.log(this)
            this.$store.dispatch('add',this.n);
            // 也可以直接commit
            // this.$store.commit('Add',this.n);
        },
        decrement() {
            this.$store.dispatch('decre',this.n); 
        },
        odd() {
            this.$store.dispatch('addOdd',this.n);
        },
        wait() {
            this.$store.dispatch('addWait',this.n);
        }
    }
}

</script>


<style scoped lang="css">
    button {
        margin-left: 5px;
    }
 </style>