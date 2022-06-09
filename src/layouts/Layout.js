import Footer from '../components/Footer/Footer.js';
import Navbar from '../components/Navbar/index.js';
import TopNav from '../components/TopNav/index.js';
export default function Layout(props) {
  return (
    <>
      <TopNav />
      <Navbar />
      <div style={{ paddingTop: '100px', paddingBottom : '100px'}} className= "mycon">
        {props.children}
      </div>
      <Footer />
    </>
  );
}
