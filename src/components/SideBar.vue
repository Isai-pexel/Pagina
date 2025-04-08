<template>
 <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre:{{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <ul>
      <li><router-Link to="/Contar">Contador</router-Link></li>
      <li><router-Link to="/lista-de-tareas">Lista de Tareas</router-Link></li>
      <li><router-Link to="/registrar">Registrar</router-Link></li>
    </ul>
  </div>
</template>

<script setup>
  import { useRegistrarStore } from './modules/Registro/stores/registrarStore';
  const registrarStore = useRegistrarStore();


</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
