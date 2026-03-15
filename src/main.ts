import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import Buefy from 'buefy'
import 'buefy/dist/css/buefy.css'

import 'bulma-modal-fx/dist/js/modal-fx.min.js'
import 'bulma-modal-fx/dist/css/modal-fx.min.css'

const app = createApp(App)
app.mount('#app')
app.use(Buefy)
