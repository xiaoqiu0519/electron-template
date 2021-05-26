import { createApp } from 'vue'
import App from './App.vue'
import router from './router'  
import store from './store'
import ElementPlus from 'element-plus';
import TagNav from '@/components/tagnav.vue'
import 'element-plus/lib/theme-chalk/index.css';
import '@/style/index.scss'
const app = createApp(App)
app.component('TagNav',TagNav)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
