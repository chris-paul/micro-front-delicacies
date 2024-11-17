import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerApplication, start } from 'single-spa'

async function loadScript(url) {
  return new Promise((resolve, reject) => {
      let script = document.createElement('script');
      script.src=url;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script)

  })
}
/* 第一个参数为子应用的名字  调用加载的方法 第三个参数是什么时候加载*/
/* 匹配到/vue的时候 就加载 */
registerApplication('myVueApp', async() => {
  console.info('加载');
  await loadScript(`http://localhost:10000/js/chunk-vendors.js`);
  await loadScript(`http://localhost:10000/js/app.js`);
  console.info( window.singleVue)
  return window.singleVue;
}, location => location.pathname.startsWith('/vue'))
start();
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
