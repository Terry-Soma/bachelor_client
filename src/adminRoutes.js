import AdminDash from "./views/Admin/AdminDash";
import AdminHut from "./views/Admin/AdminHut";
import AdminMaj from "./views/Admin/AdminMaj";
import AdminDur from "./views/Admin/AdminDur";
import AdminGraph from "./views/Admin/AdminGraph";
import AdminSch from "./views/Admin/AdminSch";
import AdminComis from "./views/Admin/AdminComis";
import AdminAssign from "./views/Admin/AdminAssign";
import AdminConfirm from "./views/Admin/AdminConfirm";
import AdminBASC from "./views/Admin/AdminBASC";

var routes = [
  {
    path: "/Home",
    name: "Home",
    icon: "nc-icon nc-tv-2",
    component: AdminDash,
    layout: "/admin"
  },
  {
    path: "/Sch",
    name: "Сургууль",
    icon: "nc-icon nc-istanbul",
    component: AdminSch,
    layout: "/admin"
  },

  {
    path: "/Hut",
    name: "Хөтөлбөрүүд",
    icon: "nc-icon nc-single-copy-04",
    component: AdminHut,
    layout: "/admin"
  },
  {
    path: "/Maj",
    name: "Мэргэжил",
    icon: "nc-icon nc-hat-3",
    component: AdminMaj,
    layout: "/admin"
  },
  {
    path: "/comis",
    name: "Комисс",
    icon: "nc-icon nc-hat-3",
    component: AdminComis,
    layout: "/admin"
  },
  {
    path: "/Assign",
    name: "Томилох",
    icon: "nc-icon nc-hat-3",
    component: AdminAssign,
    layout: "/admin"
  },
  // {
  //   path: "/confirm",
  //   name: "Хүсэлтүүд",
  //   icon: "nc-icon nc-hat-3",
  //   component: AdminConfirm,
  //   layout: "/admin"
  // },
  // {
  //   path: "/BASC",
  //   name: "Оноо солих",
  //   icon: "nc-icon nc-hat-3",
  //   component: AdminBASC,
  //   layout: "/admin"
  // },
  // {
  //   path: "/Dat",
  //   name: "Хугцаа",
  //   icon: "nc-icon nc-calendar-60",
  //   component: AdminDur,
  //   layout: "/admin"
  // },
  {
    path: "/Gra",
    name: "График",
    icon: "nc-icon nc-chart-bar-32",
    component: AdminGraph,
    layout: "/admin"
  }
];
export default routes;
