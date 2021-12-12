import App from '@/App.vue'
import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import 'font-awesome/scss/font-awesome.scss'

import router from '@/router'

const app = createApp(App);
  app.config.productionTip = false;
  app.use(ElementPlus);
  app.use(router);
  app.mount('#app')
