import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/index.js';
export default function Layout(props) {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: '100px', paddingBottom : '100px'}} className= "mycon">
        {props.children}
      </div>
      <Footer />
    </>
  );
}
