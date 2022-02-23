import { createRouter, createWebHashHistory } from "vue-router";
import routes from './router.config'

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: true
})