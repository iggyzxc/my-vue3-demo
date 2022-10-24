import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import CalculatorView from '../views/CalculatorView.vue'
import StringManView from '../views/StringManView.vue'
import AreaView from '../views/AreaView.vue'
import Rectangle from '../components/shapes/Rectangle.vue'
import Square from '../components/shapes/Square.vue'
import Triangle from '../components/shapes/Triangle.vue'
import Circle from '../components/shapes/Circle.vue'
import VuetifyView from '../views/VuetifyView.vue'
import CompApiView from '../views/CompApiView.vue'
import AxiosView from '../views/AxiosView.vue'
import QuizAppView from '../views/QuizAppView.vue'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Dashboard
  },
  {
    path: '/calculatorView',
    name: 'calculatorView',
    component: CalculatorView
  },
  {
  path: '/stringManView',
  name: 'stringManView',
  component: StringManView
  },
  {
    path: '/areaView',
    name: 'areaView',
    component: AreaView,
    children: [
      {
        path: '/rectangle',
        name: 'rectangle',
        component: Rectangle
      },
      {
        path: '/square',
        name: 'square',
        component: Square
      },
      {
        path: '/triangle',
        name: 'triangle',
        component: Triangle
      },
      {
        path: '/circle',
        name: 'circle',
        component: Circle
      },
    ]
  },
  {
    path: '/vuetifyView',
    name: 'VuetifyView',
    component: VuetifyView
  },
  {
    path: '/compApiView',
    name: 'compApiView',
    component: CompApiView
  },
  {
    path: '/axiosview',
    name: 'axiosview',
    component: AxiosView
  },
  {
    path: '/quizappview',
    name: 'quizappview',
    component: QuizAppView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
