import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Layout = () => {
  return (
    <div>
      <div className=' container mx-auto sticky top-0 z-50 '>
      <Navbar></Navbar>
      </div>
     
      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Layout;