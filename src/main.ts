import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import setupElement from './plugins/element'

let app = createApp(App).use(store).use(router)
setupElement(app)
app.mount('#app')
