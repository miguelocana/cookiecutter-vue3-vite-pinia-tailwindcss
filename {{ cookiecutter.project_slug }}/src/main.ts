import { createApp } from 'vue'
import './index.css'
import {createPinia, Pinia} from 'pinia'
import App from './App.vue'

const pinia = createPinia()

createApp(App)
    .use(pinia)
    .mount('#app')
