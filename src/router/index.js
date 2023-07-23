import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import nprogress from "nprogress";
import EventService from "@/services/EventService.js";
import GStore from '@/store'

const About = () => import(/* webpackChunkName: "about" */ '../views/About.vue')
const EventLayout = () => import(/* webpackChunkName: "event" */ '../views/event/Layout.vue')
const EventDetails = () => import(/* webpackChunkName: "event" */ '../views/event/Details.vue')
const EventRegister = () => import(/* webpackChunkName: "event" */ '../views/event/Register.vue')
const EventEdit = () => import(/* webpackChunkName: "event" */ '../views/event/Edit.vue')
const NotFound = () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue')
const NetworkError = () => import(/* webpackChunkName: "networkerror" */ '../views/NetworkError.vue')


const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: route => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about-us',
    name: 'About',
    component: About
  },
  {
    path: '/about',
    redirect: { name: 'About' }
  },
  {
    path: '/events/:id',
    name: 'EventLayout',
    props: true,
    component: EventLayout,
    beforeEnter: to => {
      return EventService.getEvent(to.params.id)
        .then((response) => {
          GStore.event = response.data;
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return { name: '404Resource', params: { resource: 'event' } }
          } else {
            return { name: 'NetworkError' }
          }
        });
    },
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: EventDetails
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: EventRegister
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: EventEdit
      }
    ]
  },
  {
    path: '/event/:afterEvent(.*)',
    redirect: to => {
      return { path: '/events/' + to.params.afterEvent }
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetworkError
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { left: 0, top: 0 }
    }
  }
})

router.beforeEach(() => {
  nprogress.start()
})

router.afterEach(() => {
  nprogress.done()
})

export default router
