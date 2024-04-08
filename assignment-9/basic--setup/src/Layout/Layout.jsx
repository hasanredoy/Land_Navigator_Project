import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar/Navbar';
const Layout = () => {
  return (
    <div>
      <div className=' container mx-auto '>
      <Navbar></Navbar>
      </div>
     
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;