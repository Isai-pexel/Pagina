<template>
 <h1>Contador Vue</h1>
 <p>{{ contador }}</p>
 <button @click="incrementar">Aumentar</button>
 <button @click="decrementar">Disminuir</button>

</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);
const incrementar = () => {
 contador.value++;
}
const decrementar = () => {
 contador.value--;
}
</script>

<style scoped>
p{
  color: red;
}
</style>
