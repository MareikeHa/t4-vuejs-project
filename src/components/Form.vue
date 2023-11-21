<script>
import { reactive } from 'vue';

export default {
  props: {
    state: Object
  },
  setup(props, { emit }) {              //props: Eigenschaften die von anderer Komponente übergeben wurden; emit: Funktion zum Auslösen von Ereignissen
    const formData = reactive({         //Erstellung reaktives Objekt formDate mit Eigenschaften
      desc: null,
      value: null,
      date: null,
    });

    function FormHandler() {            //wird aufgerufen, wenn Formular abgeschickt wird & löst add-income mit aktuellen Werten aus
      emit("add-income", {
        desc: formData.desc,
        value: formData.value,
        date: formData.date
      });

      formData.desc = null;             //Werte auf null, um Formular zurückzusetzen
      formData.value = null;
      formData.date = null;
    }
    return {
      FormHandler,                      //Rückgabe
      formData
    }
  }
};
</script>

<template>
  <form @submit.prevent="FormHandler"> <!--Formular reagiert auf submit & ruft function FormHandler auf, prevent verhindert neu laden-->
    <input type="text" placeholder="Beschreibung" v-model="formData.desc" required/>
    <input type="number" placeholder="Wert" v-model="formData.value" required/>
    <input type="date" placeholder="Datum" v-model="formData.date" required/>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
</style>