// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 应用
Vue.use(Vuex)


/* 准备actions 用于响应组件中的动作 */
const actions = {
    add(context,value) {
        context.commit('Add', value)
    },
    decre(context,value) {
        context.commit('Decre', value)
    },
    addOdd(context,value) {
        if(context.state.sum % 2 !== 0) {
            context.commit('Add', value)
        } 
    },
    addWait(context,value) {
        setTimeout(() => {
            context.commit('Add',value);
        }, 500);
    }
}

/* 准备mutations 用于操作数据(state) */
const mymutations = {
    Add(state,value) {
        state.sum += value
    },
    Decre(state,value) {
        state.sum -= value
    }
}

/* 准备state 用于存储数据 */
const state = {
    sum:0, // 当前的和
}



// 创建并暴露Store
const store = new Vuex.Store({
    state,
    mutations: mymutations,
    actions
})


export default store