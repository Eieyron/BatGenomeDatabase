import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Strain from "./pages/strain/Strain";
import Home from "./pages/home/Home";
import Taxonomy from "./pages/taxonomy/Taxonomy";
import StrainDetail from "./pages/strain/StrainDetail";
import CategoryList from "./components/taxonomy_handler/CategoryList";
import TaxonomyDetail from "./pages/taxonomy/TaxonomyDetail";
import Profile from "./pages/profile/Profile";

var routes = [
  // Taxonomy
  // Domain
  {
    path: "/taxonomy/:category/:id",
    component: TaxonomyDetail,
    name: "dynamic_category",
  },
  {
    path: "/taxonomy/domain",
    component: CategoryList,
    name: "domain",
  },

  //Phylum
  {
    path: "/taxonomy/phylum",
    component: CategoryList,
    name: "phylum",
  },

  //Class
  {
    path: "/taxonomy/class",
    component: CategoryList,
    name: "class",
  },

  //Order
  {
    path: "/taxonomy/order",
    component: CategoryList,
    name: "order",
  },

  //Family
  {
    path: "/taxonomy/family",
    component: CategoryList,
    name: "family",
  },

  //Genus
  {
    path: "/taxonomy/genus",
    component: CategoryList,
    name: "genus",
  },

  //Species
  {
    path: "/taxonomy/species",
    component: CategoryList,
    name: "species",
  },

  {
    path: "/taxonomy",
    component: Taxonomy,
    name: "taxonomy",
  },

  //About
  {
    path: "/about",
    component: About,
    name: "about",
  },

  //Profile
  {
    path: "/profile",
    component: Profile,
    name: "profile",
  },

  //Strain
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

  //Login
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
