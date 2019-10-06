import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  // route level code-splitting done by providing a callback instead of a component
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  routes: [
    {
      path: '/',
      name: 'events',
      component: () => import(/* webpackChunkName: "events" */ './views/Events.vue'),
    },
    {
      path: '/events/:eventId',
      name: 'event-details',
      component: () => import(/* webpackChunkName: "event-details" */ './views/EventDetail.vue'),

    }, {
      path: '/events/:eventId/scan',
      name: 'events',
      component: () => import(/* webpackChunkName: "scanner" */ './views/Scanner.vue'),
    },
  ],
});
