import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Strain from "./pages/strain/Strain";
import Home from "./pages/home/Home";
import Taxonomy from "./pages/taxonomy/Taxonomy";
import StrainDetail from "./pages/strain/StrainDetail";

var routes = [
  {
    path: "/taxonomy",
    component: Taxonomy,
    name: "taxonomy",
  },
  {
    path: "/about",
    component: About,
    name: "about",
  },
  {
    path: "/strain/:id",
    component: StrainDetail,
    name: "strainContent",
  },
  {
    path: "/strain",
    component: Strain,
    name: "strain",
  },
  {
    path: "/login",
    component: Login,
    name: "login",
  },
  {
    path: "/",
    component: Home,
    name: "home",
  },
];

export default routes;
