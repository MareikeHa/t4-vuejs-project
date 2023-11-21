import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import IncomeItem from './components/IncomeItem.vue';

const app = createApp(App);
app.component('Header', Header);
app.component('Form', Form);
app.component('IncomeItem', IncomeItem);

app.mount('#app');