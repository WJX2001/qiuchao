import Vue from 'vue'
import App from './App.vue'
import plugin from './plugin'



// 引入store
import store from './store/index'

// 引入插件
import VueResource from  'vue-resource'

Vue.config.productionTip = false
Vue.use(plugin)
Vue.use(VueResource)




new Vue({
  render: h => h(App),
  store,
  // 在beforeCreate阶段，Vue原型上放一个x 就是实例本身(vm),这样后续Vue在解析的时候就可以拿到
  beforeCreate () {
    Vue.prototype.$bus = this // 安装全局事件总线
  }
}).$mount('#app')
