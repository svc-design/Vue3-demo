import { createApp } from 'vue'
import App from '@/App.vue'
import Router from '@/router/index'
import Store from '@/store/index'

import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import '@/assets/index.scss'

const app = createApp(App);
  app.config.productionTip = false;
  app.use(Store);
  app.use(ElementPlus);
  app.use(Router);
  app.mount('#app')
