<script>
import '../assets/styles.css';

export default {
    //Definition Eigenschaften totalIncome
    props: {
        totalIncome: Number
    },
};
</script>

<template>
    <header>
        <h1>Einkommensrechner</h1>
        <div class="total-income">{{ totalIncome }} €</div>
    </header>
</template>