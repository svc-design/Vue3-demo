# vue3-demo-project

## 初始化项目

```
npm init @vitejs/app
npm install vue-router@next vuex@next
```

## 子目录说明

```
.
├── README.md
├── index.html         入口文件
├── package.json
├── vite.config.js     vite工程化配置文件
├── src
│   ├── main.js        入口
│   ├── App.vue        主组件
│   ├── api            数据请求
│   ├── assets         静态资源
│   ├── components     组件
│   ├── pages          页面
│   ├── router         路由配置
│   ├── store          vuex数据
│   └── utils          工具函数
```

## 引用组件版本

开发环境: Nodejs v14.18.1，Npm 6.14.15

```
  "dependencies": {
    "axios": "^0.21.1",
    "echarts": "^5.2.0",
    "element-plus": "^1.2.0-beta.3",
    "qs": "^6.10.1",
    "vue": "^3.0.0",
    "vue-router": "^4.0.10",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^1.9.3",
    "@vitejs/plugin-vue-jsx": "^1.2.0",
    "vite": "^2.6.4"
```

## Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
