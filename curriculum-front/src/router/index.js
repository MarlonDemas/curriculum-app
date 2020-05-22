import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
import Home from '../views/Home.vue'
import DisplayCurriculum from '../views/DisplayCurriculum.vue'
import UpsertCurriculum from '../views/UpsertCurriculum.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: DisplayCurriculum
  },
  {
    path: '/curriculum/upsert',
    name: 'upsert',
    component: UpsertCurriculum
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router