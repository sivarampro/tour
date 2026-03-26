import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import TripDetail from './pages/TripDetail';
import Visa from './pages/Visa';
import Contact from './pages/Contact';
import Auth from './pages/Auth';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path="trip" element={<TripDetail />} />
          <Route path="trip/:id" element={<TripDetail />} />
          <Route path="visa" element={<Visa />} />
          <Route path="contact" element={<Contact />} />
          <Route path="auth" element={<Auth />} />
          <Route path="blog" element={<Blog />} />
          <Route path="faqs" element={<FAQs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
