import Vue from 'vue'
import App from './App.vue'
import router from './router'
import  singleSpaVue from 'single-spa-vue'
Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')


const appOptions = {
  el: "#vue", // 我要挂载到父应用的#app节点
  router,
  render: h => h(App),
}

const vueLifeCycle = singleSpaVue({
  Vue,
  appOptions
});

if(window.singleSpaNavigate) {
  __webpack_public_path__ = "http://localhost:10000/"
}
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;