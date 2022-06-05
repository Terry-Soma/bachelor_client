import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/index.js';
export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: '100px' }} className="container">
        {props.children}
      </div>
      <Footer />
    </>
  );
}
