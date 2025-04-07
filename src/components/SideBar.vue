<template>
 <div class="sidebar">
    <h2>Barra Lateral</h2>
    <ul>
      <li><router-Link to="/Contar">Contador</router-Link></li>
      <li><router-Link to="/lista-de-tareas">Lista de Tareas</router-Link></li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style>
.sidebar {
  width: 200px;
  background-color: #f0f0f0;
  padding: 20px;
}
</style>
