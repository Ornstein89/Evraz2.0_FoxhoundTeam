// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from "@/views/MainView.vue"
import ExhausterView from "@/views/ExhausterView.vue"
import PlotView from "@/views/PlotView.vue"

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView,
    // props : true,
  },
  {
    path: '/exhauster',
    name: 'ExhausterView',
    component: ExhausterView,
    props : true,
  },
  {
    path: '/plot',
    name: 'PlotView',
    component: PlotView,
    // props : true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
