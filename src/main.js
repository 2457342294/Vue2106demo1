import { createApp } from 'vue'
import App from './App.vue'
import Element from 'element-plus';
import router from './router/index.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

createApp(App).use(Element).use(router).use(VueAxios,axios).mount('#app')