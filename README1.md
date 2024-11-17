### single-spa

https://gitee.com/organizations/single-spa-demo/

对比于systemJS,通过 

### 创建项目

```js
npm install create-single-spa@4.1.6 -g

// single-spa application / parcel 创建子应用和物料

// in-browser utility module (styleguide, api cache, etc) 多个应用共享的

// root-config 创建主应用
```

### 遵守接入协议

```js
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

```

### 缺点

基于sysytemjs ，不是很友好

每一个应用都必须基于接入协议改造一遍