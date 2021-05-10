import { createApp } from 'vue'
import App from './App.vue'
import router, { setupLayout } from './router/index'
import store from './store/index'
import setupElement from './plugins/element'
import 'normalize.css/normalize.css'

let app = createApp(App).use(store).use(router)
setupElement(app)
setupLayout(app)
app.mount('#app')
