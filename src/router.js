/* eslint-disable */


import CreateProfile from "./pages/CreateProfilePage.vue";
import HomePage from "./pages/HomePage.vue";
import QRScannerPage from "./pages/QRScannerPage.vue";
import ShowProfilePage from "./components/QRShowProfile.vue";

import { createRouter, createWebHashHistory } from 'vue-router';

   const router = createRouter({
    history: createWebHashHistory(),
    routes :  [
      {
        path: '/',
        name: "root",
        redirect: {
          name: "home"
        }
      },
      {
        path: "/showprofile/:id",
        name: "profilepage",
        component: ShowProfilePage
      },
      {
        path: "/home",
        name: "home",
        component: HomePage,
      },
      {
        path: "/createprofile",
        name: "createprofile",
        component: CreateProfile,
      },
      {
        path: "/scannerpage",
        name: "scannerpage",
        component: QRScannerPage
      },
	  ]
   })

  export default router