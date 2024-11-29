### single-spa

我们需要借助systemJs来加载我们的应用

注册应用较为麻烦，且应用只有匹配到才能加载，没有预加载过程

### qianduan

```js
// 基座
npx create-react-app substrate

npm create vue@latest

vue create m-vue

npx create-react-app m-react
```

### 编码

substrate 项目注册并启动注册registerApps.js

m-react添加.env 启动1000端口

**qiankun 要求应用暴漏的格式是umd模式，所以有必要改m-react 配置，详情请看.rescriptsrc.JS,同时需要修改 项目启动方式**

```js
npm install @rescripts/cli --force
```

m-react 挂载容器问题,如果写document.getElement('root')会导致找到了父容器的root，导致父应用被覆盖，所以必须在父应用设置子渲染的container

```js
```


如何独立运行,如果只写到mount里面render，那么子无法独立运行，必须使用qiankun的标识__POWERED_BY_QIANKUN__

```js
// qiankun 提供了一些标识，用于表示当前应用是否在父应用中被引入过
if (!window.__POWERED_BY_QIANKUN__) {
    render({}); // 独立运行调用render方法
}
```

还有一个问题 就是 父是3000端口，加载子应用的时候找子应用的静态文件是从3000端口找的，但是不存在，必须制定public-path

```js
if(window.__POWERED_BY_QIANKUN__){
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
```

除了react、vue 也可以接入静态文件

```js
http-server --port 30000 cors
```