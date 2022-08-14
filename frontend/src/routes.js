/*!

=========================================================
* Black Dashboard React v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Home from "layouts/Home/Home";
import Dashboard from "views/Dashboard.js";
import Login from "views/Login";
import Film from "views/Film";
import Films from "views/Films";
import UserProfile from "views/UserProfile.js";
import CreateFilm from "views/createFilm";

var routes = [
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Home,
  
  // },
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "tim-icons icon-chart-pie-36",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  {
    path: "/films",
    name: "Films",
    icon: "tim-icons icon-puzzle-10",
    component: Films,
    layout: "/admin"
  },
  {
    path: "/film",
    name: "film",
    icon: "tim-icons icon-puzzle-10",
    component: Film,
    layout: "/admin"
  },
  {
    path: "/create",
    name: "Create Film",
    icon: "tim-icons icon-puzzle-10",
    component: CreateFilm,
    layout: "/admin"
  },

];
export default routes;
