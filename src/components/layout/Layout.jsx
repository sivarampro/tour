import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from '../common/FloatingActions';
import './Layout.css';

const Layout = () => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';

  return (
    <div className="layout-wrapper">
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
      <FloatingActions />
    </div>
  );
};

export default Layout;
