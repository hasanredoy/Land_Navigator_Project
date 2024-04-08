import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
const Layout = () => {
  return (
    <div>
      <div className=' container mx-auto sticky top-0 z-50 '>
      <Navbar></Navbar>
      </div>
     
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;