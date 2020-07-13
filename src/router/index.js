import Vue from 'vue';
import VueRouter from 'vue-router';

// Components
import Home from '../views/Home';
import Users from '../views/Users';
// Gallery
// -------------------------------------------------------------------------------
// Déccouper la partie gallery pour avoir des sous liens dans le component Gallery
// -------------------------------------------------------------------------------
//import Gallery from '../views/Gallery';
//import LightboxImage from '../components/lightbox/LightboxImage';
//import Lightbox from '../components/lightbox/Lightbox';
//import Carousel from '../components/carousels/Carousel.vue'
// End gallery
import Todos from '../views/Todos';
import About from '../views/About';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home,
  name: 'root'
}, {
  path: '/users',
  component: Users,
  name: 'users',
}, {
  path: '/gallery',
  component: resolve => require(['../views/Gallery'], resolve),
  name: 'gallery',
  //children: [{
  //  path: '/gallery/lightbox',
  //  components: {
  //    default: LightboxImage,
  //    lightbox: Lightbox,
  //  },
  //  name: 'gallery.lightbox',
  //}, {
  //  path: '/gallery/carousel',
  //  component: ,
  //  name: 'gallery.lightbox',
  //}],
}, {
  path: '/todos',
  component: Todos,
  name: 'todos',
}, {
  path: '/about',
  component: About,
  name: 'about',
}, {
  path: '*',
  redirect: { name: 'root' },
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
