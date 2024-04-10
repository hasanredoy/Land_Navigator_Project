import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Layout = () => {
  return (
    <div>
      <div className=' w-[98%] lg:w-[96%] mx-auto sticky top-0 z-50 '>
      <Navbar></Navbar>
      </div>
     
      <div className='  w-[96%] lg:w-[96%] mx-auto'>
      <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;