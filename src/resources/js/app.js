import { createApp } from 'vue';
import App from './components/App.vue';
import { BootstrapVueNext } from 'bootstrap-vue-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const app = createApp(App);
app.use(BootstrapVueNext);
app.mount('#app');
