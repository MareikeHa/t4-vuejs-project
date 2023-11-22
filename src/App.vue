<script>
//Importe der Komponenten & Funktionen 
import { reactive, computed } from 'vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';
import IncomeList from './components/IncomeList.vue';
import './assets/styles.css';

const storedIncome = JSON.parse(localStorage.getItem('income')); //Wert im LocalStorage wird abgerufen & als JavaScript-Objekt gepast

export default {
  setup() {
    const state = reactive({                            //Definition Eigenschaften state (reaktives Objekt)
      income: storedIncome || [],                       //falls im LocalStorage keine Daten vorhanden, leerer Array income, zum Speichern der Einnahmen
      totalIncome: computed(() => {                     //berechnete (computed) Eigenschaft totalIncome (Gesamteinnahmen)
        return state.income.reduce((total, item) => total + item.value, 0);   //Berechnung mittels reduce Funktion
      }),
      sortedIncome: computed(() => {                  //Definition berechnete Eigenschaft sortedIncome 
        let temp = [];                                //temporäres Array, um sortierte Einkommen zu speichern
        temp = state.income.sort(function (a, b) {    //Einkommen werden nach Datum in absteigener Reihenfolge sortiert & in Array gespeichert
          return b.date - a.date;
        });
        return temp;                                  //Rückgabe sortierter Array
      })
    });

    function parseDate(dateString) {              //Funktion, die Datum in einen Zeitstempel konvertiert
      const [year, month, day] = dateString.split("-");
      return new Date(year, month - 1, day).getTime();
    }

    function AddIncome(obj) {                     //wird aufgerufen, wenn Ereignis add-income ausgelöst wird - Hinzufügen von Einkommen
      state.income = [...state.income, {          //Einnahme wird income-Array hinzugefügt (mit ID,Beschreibung,Wert&Datum)
        id: Date.now(),
        desc: obj.desc,
        value: parseInt(obj.value),
        date: parseDate(obj.date)
      }];

      updateLocalStorage();                     //ruft Funktion auf
    }

    function removeItem(id) {                               //um ein Element mit angegebener ID aus income-Array zu entfernen
      state.income = state.income.filter(v => v.id != id);  //filter-Funktion, zu Erstellung neuer Array ohne dem Element
      updateLocalStorage();
    }

    function updateLocalStorage() {                               //aktualisiert die LocalStorage Daten/speichert sie unter dem Schlüssel income
      localStorage.setItem('income', JSON.stringify(state.income));
    }

    return {                            //setup Funktion gibt Objekt mit entsprechenden Eigenschaften zurück
      Header,
      state,
      Form,
      AddIncome,
      removeItem,
      IncomeList
    };
  },
};

</script>

<template>
  <!--Verwendung der Komponenten-->
  <Header :totalIncome="state.totalIncome" />             <!--totalIncome wird als Prop an Header übergeben-->
  <hr>
  <Form @add-income="AddIncome" />                        <!--wenn in Form.vue ausgelöst, wird add-income abgefangen & Funktion AddIncome aufgerufen-->
  <IncomeList :state="state" @remove-item="removeItem" /> <!--state als Prop an IncomeList übergeben & wenn Ereignis ausgelöst removeItem aufgerufen-->
</template>


<style scoped></style>
