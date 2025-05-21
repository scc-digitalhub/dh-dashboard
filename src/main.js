import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

import './assets/scss/global.scss';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import store from './store'

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
