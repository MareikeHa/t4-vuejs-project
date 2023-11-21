<script>
import { reactive, computed } from 'vue';
import Header from './components/Header.vue';

export default {
  setup() {
    const state = reactive({
      income: [],
      totalIncome: computed(() => {
        let temp = 0;
        if (state.income.length > 0) {
          for (let i = 0; i < state.income.length; i++) {
            temp += state.income[i].value;
          }
        }
        return temp;
      })
    });

    return {
      Header,
      state
    };
  }
};
</script>

<template>
  <Header :totalIncome="state.totalIncome" />
</template>



<style scoped>
</style>
