<script> 
import IncomeItem from './IncomeItem.vue';  //IncomeItem wird importiert
import '../assets/styles.css';

export default {
    props: {
        state: Object
    },
    setup(props, { emit }) {
        function removeItem(id) {       //löst Ereignis remove-item mit id aus
            emit('remove-item', id);
        }
        return {                        //Rückgabe
            removeItem
        }
    }
}
</script>

<template>
    <div class="income-list">
        <IncomeItem v-for="obj in state.sortedIncome" :key="obj.id" :income="obj" @remove-item="removeItem" /> 
        <!--rendert incomeItem für jedes Objekt in state.sortedIncome, :key stellt sicher, dass jedes Element identifizierbar, remove-item wird empfangen & removeItem wird aufgerufen -->
    </div>
</template>

<style scoped>
</style>