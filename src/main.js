import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BootstrapJs from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { currency, toFixedTwo } from '@/methods/filters'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import aos from 'aos'
import '../node_modules/aos/dist/aos.css'
aos.init()

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(VueAxios, axios)
app.use(router)
app.use(aos)
app.config.globalProperties.BootstrapJs = BootstrapJs
app.config.globalProperties.$filters = { currency, toFixedTwo }
app.component('Loading', Loading)
app.mount('#app')
