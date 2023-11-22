//Importe der createApp-Funktion, Komponenten & fontawesome
import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import App from './App.vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import IncomeItem from './components/IncomeItem.vue';
import IncomeList from './components/IncomeList.vue';
library.add(faTrashCan);

const app = createApp(App);                //Vue-Instanz mit createApp-Funktion & Hauptkomponenten App als Argument
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('Header', Header);           //component-methode, um Vue mitzuteilen, dass Komponenten benutzerdefiniert & global verwendbar 
app.component('Form', Form);
app.component('IncomeItem', IncomeItem);
app.component('IncomeList', IncomeList);

app.mount('#app');