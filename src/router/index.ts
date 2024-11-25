import { createMemoryHistory, createRouter } from 'vue-router'

import GameView from '@/views/GameView.vue'
import HomeView from '@/views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/game', component: GameView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router;