/* eslint-disable */


import CreateProfile from "./pages/CreateProfilePage.vue";
import Home from "./pages/HomePage.vue";


import VueRouter from 'vue-router';

const router = new VueRouter({
    routes :  [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
      {
        path: "/createprofile",
        name: "createprofile",
        component: CreateProfile,
      },
	  ]
  })

  export default router