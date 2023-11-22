import { createApp } from 'vue';
import App from './App.vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import IncomeItem from './components/IncomeItem.vue';
import IncomeList from './components/IncomeList.vue';

const app = createApp(App);
app.component('Header', Header);
app.component('Form', Form);
app.component('IncomeItem', IncomeItem);
app.component('IncomeList', IncomeList);

app.mount('#app');