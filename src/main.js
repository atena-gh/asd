import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'vue3-carousel/dist/carousel.css';
import './assets/font/fontiran.css'
import './assets/style/main.css';
import './assets/style/theme.scss';
import router from './router.js';
const app =createApp(App); 
app.use(router);
app.mount('#app')
