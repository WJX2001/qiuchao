// 该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'


/* 准备actions 用于响应组件中的动作 */
const actions = {}

/* 准备mutations 用于操作数据(state) */
const mymutations = {}

/* 准备state 用于存储数据 */
const state = {}

Vue.use(Vuex)

// 创建并暴露Store
export const store = new Vuex.Store({
    state,
    mutations: mymutations,
    actions
})


