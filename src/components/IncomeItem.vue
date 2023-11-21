<script>
export default {
    props: {
        income: Object
    },
    setup(props, { emit }) {
        let date = new Date(props.income.date);             //Datum aus income-Prop wird in Date-Objekt konvertiert
        let day = date.getDate();                           //extrahieren Tag, Monat & Jahr
        let month = date.getMonth();
        let year = date.getFullYear();
        const formattedDate = date.toLocaleDateString();    //konvertiert Datum in einen lokalisierten String

        function removeItem() {                             //sendet das Ereignis remove-item
            emit("remove-item", props.income.id);
        }
        return {                        //Rückgabe
            formattedDate,
            removeItem
        }
    }
}
</script>

<template>
    <div class="income-item">
        <div class="iconRemoveItem" @click="removeItem"><font-awesome-icon :icon="['far', 'trash-can']" /></div>   <!--klick auf Icon löst removeItem Funktion aus-->
        <div class="itemInfo">
            <div class="desc">{{ income.desc }}</div>
            <div class="price">{{ income.value }} €</div>
            <div class="date">{{ formattedDate }}</div>
        </div>
    </div>
</template>

<style scoped></style>