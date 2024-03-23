import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VuePapaParse from 'vue-papa-parse'

const app = createApp(App)

app.use(VuePapaParse)
app.mount('#app')
// App.use(VueCsvImportPlugin)
// import {VueCsvImportPlugin} from "vue-csv-import";
