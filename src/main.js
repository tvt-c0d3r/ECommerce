import './assets/main.css'
import router from './Router/Router'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
