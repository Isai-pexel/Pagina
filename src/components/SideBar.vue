<template>
 <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre:{{ nombre }}</h3>
    <h3>Email: {{ email }}</h3>
    <ul>
      <li><router-Link to="/Contar">Contador</router-Link></li>
      <li><router-Link to="/lista-de-tareas">Lista de Tareas</router-Link></li>
      <li><router-Link to="/registrar">Registrar</router-Link></li>
    </ul>
  </div>
</template>

<script setup>
  import { useRegistrarStore } from './modules/Registro/stores/registrarStore';
  import { ref, watch } from 'vue';
  const registrarStore = useRegistrarStore();
  const nombre = ref(registrarStore.nombre.value);
  const email = ref(registrarStore.email.value);
  watch(() => registrarStore.nombre, (newvalue) => {
    nombre.value = newvalue;
  })

  watch(() => registrarStore.nombre, (newvalue) => {
    nombre.value = newvalue;
  })
  watch(() => registrarStore.email, (newvalue) => {
    email.value = newvalue;
  })



</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
