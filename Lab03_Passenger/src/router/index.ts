import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PassengerDetailsView from '../views/PassengerDetailsView.vue';
import AirlineDetailsView from '../views/AirlineDetailsView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ResourceNotFoundView from '../views/ResourceNotFoundView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
routes: [
  { path: '/', 
  name: 'home', 
  component: HomeView 
},
  {
    path: '/passenger/:id',
    name: 'passenger-details',
    component: PassengerDetailsView,
    children: [
      {
        path: 'airline/:airlineId',
        name: 'airline-details',
        component: AirlineDetailsView,
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView },
  { path: '/resource-not-found', name: 'resource-not-found', component: ResourceNotFoundView },
],


});

export default router;
