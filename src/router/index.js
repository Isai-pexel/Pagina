import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
       path: '/Contar',
       name: 'Contar',
       component: () => import('../components/modules/Contar/components/Contar.vue'),
    },
    {
      path: '/lista-de-tareas',
      name: 'ListaDeTareas',
      component: () => import('../components/modules/listaDeTareas/components/ListaDeTareas.vue'),
   },
   {
    path: '/registrar',
    name: 'registrar',
    component: () => import('../components/modules/Registro/views/RegistrarViews.vue'),
 },
  ],
})

export default router
