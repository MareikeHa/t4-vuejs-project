import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';

const app = createApp(App);
app.component('Header', Header);
app.component('Form', Form);

app.mount('#app');