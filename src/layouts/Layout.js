import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/index.js';
import Selecteds from '../Selecteds';
export default function Layout(props) {
  return (
    <>
      <Navbar />
      <Selecteds />
      <div style={{ marginTop: '100px' }} className="container">
        {props.children}
      </div>
      <Footer />
    </>
  );
}
