import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: "/",
    name: "Buscar",
    component: () => import("../views/Buscar.vue")
  },
  {
    path: "/carros",
    name:"Carros",
    component: () => import("../views/Carros.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
