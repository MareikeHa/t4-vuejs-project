<script>
//Importe der Dateien & Funktionen 
import { reactive, computed } from 'vue';
import Header from './components/Header.vue';
import Form from './components/Form.vue';

export default {
  setup() {
    const state = reactive({            //Definition Eigenschaften state (reaktives Objekt)
      income: [],                       //leerer Array income, zum Speichern der Einnahmen
      totalIncome: computed(() => {     //berechnete (computed) Eigenschaft totalIncome (Gesamteinnahmen)
        return state.income.reduce((total, item) => total + item.value, 0);   //Berechnung mittels reduce Funktion
      })
    });

    function parseDate(dateString) {              //Funktion, die Datum in einen Zeitstempel konvertiert
      const [year, month, day] = dateString.split("-");
      return new Date(year, month, day).getTime();
    }

    function AddIncome(obj) {                     //wird aufgerufen, wenn Ereignis add-income ausgelöst wird
      state.income = [...state.income, {          //Einnahme wird income-Array hinzugefügt (mit ID,Beschreibung,Wert&Datum)
        id: Date.now(),
        desc: obj.desc,
        value: parseInt(obj.value),
        date: parseDate(obj.date)
      }];

    }

    return {                            //setup Funktion gibt Objekt  mit entsprechenden Eigenschaften zurück
      Header,
      state,
      Form,
      AddIncome
    };
  }
};
</script>

<template>                                    <!--Verwendung der Komponenten-->
  <Header :totalIncome="state.totalIncome" /> <!--totalIncome wird als Prop an Header übergeben-->
  <Form @add-income="AddIncome" />            <!--wenn in Form.vue ausgelöst, wird add-income abgefangen & Funktion AddIncome aufgerufen-->
</template>


<style scoped></style>
