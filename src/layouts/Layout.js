import DashNav from "../components/Navbars/DashNavbar";
import Selecteds from "../Selecteds";
export default function Layout(props) {
  return (
    <>
      <DashNav />
      <Selecteds />
      <div style={{ marginTop: "100px" }} className="container">
        {props.children}
      </div>
    </>
  );
}
