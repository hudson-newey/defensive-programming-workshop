import { createApp } from 'vue'
import App from './App.vue'

import Buefy from "buefy";

import './style.css'
import "buefy/dist/css/buefy.css";

const app = createApp(App)
app.mount('#app')
app.use(Buefy)
