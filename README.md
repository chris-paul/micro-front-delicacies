# micro-front-delicies
micro-front-delicies

### 创建子项目

```js
npm install -g @vue/cli

vue create vhild-vue
vue create parent-vue
```

#### 子应用

子应用需要暴露出 bootstrap、mount、unmount 方法, 使用single-spa 做路由劫持,同时child应用必须打包为一个个的lib

打包必须使用umd的方式 此时window.singleVue.mount/bootstrap/unmount = mount/bootstrap/unmount
```js
// 子应用必须暴露出去的方法 供父应用调用
export const bootstrap = vueLifeCycle.bootstrap;
export const mount = vueLifeCycle.mount;
export const unmount = vueLifeCycle.unmount;

// vue.config.js
module.exports = {
    configureWebpack: {
        output: {
            library: "singleVue",
            libraryTarget: 'umd'
        }
    }
}
```

### 父应用

+ 首先指定#vue用来存放子应用


```js
<template>
  <div id="app">
     <router-link to="/vue">加载vue应用</router-link> |
     <div id="vue"></div>
  </div>
</template>
```

+ 父应用注册执行函数 并且加载子应用

```js
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
```

+ 此时我们发现点击子应用的abount 请求的是8080的路由,此时需要修改webpack的publicpath

```js
// 

const router = new VueRouter({
  mode: 'history',
  base: '/vue',
  routes
})

if(window.singleSpaNavigate) {
  __webpack_public_path__ = "http://localhost:10000/"
}
```

### single-spa缺陷

+ 不够灵活不能够劫持js文件 每次得自己加载

+ 样式不隔离

+ 没有js沙箱的机制 window变量公用的
