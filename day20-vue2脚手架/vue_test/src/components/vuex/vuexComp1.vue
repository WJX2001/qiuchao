<template>
    <div >
        <h1>当前求和为：{{sum}}</h1>
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
            this.sum += this.n;
        },
        decrement() {
            this.sum -= this.n; 
        },
        odd() {
            if(this.sum % 2) {
                this.sum += this.n;
            }
        },
        wait() {
            setTimeout(() => {
                this.sum += this.n;
            }, 500);
        }
    }
}

</script>


<style scoped lang="css">
    button {
        margin-left: 5px;
    }
 </style>