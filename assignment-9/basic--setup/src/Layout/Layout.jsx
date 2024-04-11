import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
const Layout = () => {
  return (
    <div>
      <div className=' w-[98%] lg:w-[96%] mx-auto sticky top-0 z-50 '>
      <Navbar></Navbar>
      </div>
     
      <div   style={{
          fontFamily:
            "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
        }} className='  w-[98%] lg:w-[96%] mx-auto min-h-screen'>
      <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Layout;