### 微前端

微前端就是将不同的功能按照不同的维度拆分成多个子应用，通过主应用来加载这些子应用。微前端的核心在于拆完后在合，实现分而治之

### 为什么需要微前端

+ 一般我们的开发都是用组件来拼接项目，随着功能越来越复杂，我们的组件越来越多，上线之后如果想修改某一个项目就需要将全部组件升级打包，打包会比较慢

+ 项目分团队开发，团队技术栈可能不一样，通过将应用拆分不同团队，方便管理。同时每一个团队开发的模块（根据业务划分）都可以独立开发，独立部署。业务联系密切的无需开发

+ 实现增量迁移，老项目替换最新的技术栈。我们可以将新的功能用最新的技术栈开发，嵌入到老应用中实现增量迁移。

### 如何实现微前端

我们可以将一个应用划分为若干个子应用，将子应用打包微一个个模块。当路径切换时加载不同的子应用。

+ 基座模式：通过搭建基座、配置中心来管理子应用。如基于single spa的qiankun方案。

+ 自组织模式：通过约定进行互相调用，但会遇到处理第三方依赖的问题。

+ 去中心模式：脱离基座模式，每个应用之间都可以批次分享资源。如基于webpack5 module federation实现的EMP微前端方案，可以实现多个应用彼此共享资源。

### 实现微前端的技术

+ 采用什么方案进行应用拆分

+ 采用何种方式进行通信

+ 应用之间如何隔离

#### Iframe

+ 微前端最简单的方案，通过Iframe加载子应用

+ 可以通过postMessage通信

+ 完美的沙箱机制自带应用隔离

缺点： 用户体验差（比如双滚动条问题、弹窗只能显示在Iframe中、在Iframe内部切换路由页面刷新状态可能无法保留）

#### web compenents

+ 将前端应用程序分解为自定义HTML元素

+ 基于CustomEvent 实现通信

+ Shadow DOM 天生的作用域隔离

缺点：浏览器支持问题、学习成本、调试困难、修改样式困难等

#### Single-spa

+ single-spa 通过路由劫持实现应用的加载（采用system.JS实现应用的加载, 提供应用间公共组件加载以及公共业务逻辑处理

子应用需要暴露固定的钩子 bootstrap、mount、unmount 接入协议

+ 基于props 主子应用间通信

+ 无沙箱机制，需要自己实现JS沙箱和CSS沙箱

缺点：学习成本、无沙箱机制、需要对原有应用进行改造、子应用之间相同的资源需要重新加载的问题

#### Module federation

+ 通过模块联邦将组件进行打包导出使用

+ 共享模块的方式进行通信

+ 无CSS和JS沙箱

缺点：需要webpack 5

### 模块类型 & 模块加载器

既然微前端将多个子应用拆分为了不同的模块。那么整合的时候不可避免的需要加载模块。如何加载模块呢？

我们知道常见的模块规范有 AMD、CMD、ESM、UMD、CJS等。如果我们基于某一种模块定义来实现，比如我们最常用的es module,在利用importmap 实现别名。这种方式的缺点是需要所有模块都导出成 ESModule，当前社区当中的很多模块都没有导出成 ESModule，有些模块甚至没有经过编译，所以目前使用 ESModule 实现 bundless 仍然有一定困难。



```js
<script type="importmap">
  {
    "imports": {
      "react": "https://airpack.alibaba-inc.com/react",
      "react-dom": "https://airpack.alibaba-inc.com/react-dom"
    }
  }
</script>

<div id="app"></div>

<script type="module">
  import React from 'react'
  import ReactDOM from 'react-dom'

  ReactDOM.render('Hello React', document.getElementById('root'))
</script>
```

所以需要一个选择一个模块规范，可以加载各种模块，性能还比较好，还支持importmap,systemjs 应运而出。

### SystemJS

systemJs 是一个通用的模块加载器， 他能在浏览器上动态加载模块。微前端的核心就是加载微应用。我们将应用打包为模块，在浏览器中通过systemJS加载模块

