import Home from "./views/Comis/Home.js";
import Edit from "./views/Comis/Edit.js";
import Regist from "./views/Comis/Regist.js";
import Confirm from "./views/Comis/Confirm.js";
import Import from "./views/Comis/Import";
import Export from "./views/Comis/Export";

var routes = [
  {
    path: "/Home",
    name: "Таны нийт бүртгэлүүд",
    icon: "nc-icon nc-tv-2",
    component: Home,
    layout: "/comis"
  },
  {
    path: "/Add",
    name: "Элсэгч нэмэх",
    icon: "nc-icon nc-simple-add",
    component: Regist,
    layout: "/comis"
  },
  {
    path: "/Confirm",
    name: "Томилох",
    icon: "nc-icon nc-check-2",
    component: Confirm,
    layout: "/comis"
  },
  {
    path: "/Edit",
    name: "Мэдээлэл шинэчлэх",
    icon: "nc-icon nc-ruler-pencil",
    component: Edit,
    layout: "/comis"
  },
  {
    path: "/Import",
    name: "Excel Import",
    icon: "nc-icon nc-cloud-upload-94",
    component: Import,
    layout: "/comis"
  },
  {
    path: "/Export",
    name: "Excel Export",
    icon: "nc-icon nc-cloud-download-93",
    component: Export,
    layout: "/comis"
  }
];
export default routes;
