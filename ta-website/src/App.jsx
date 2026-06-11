import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home          from './pages/Home';
import Platform      from './pages/Platform';
import FeaturesPage  from './pages/FeaturesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ProductPage   from './pages/ProductPage';
import AboutUs       from './pages/AboutUs';
import ContactPage   from './pages/ContactPage';
import DownloadApp   from './pages/DownloadApp';
 import FAQPage       from './pages/FAQPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsPage     from './pages/TermsPage';
import CookiePolicy  from './pages/CookiePolicy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/"                   element={<Home />} />
          <Route path="/platform"           element={<Platform />} />
          <Route path="/features"           element={<FeaturesPage />} />
          <Route path="/how-it-works"       element={<HowItWorksPage />} />
          {/* <Route path="/product"            element={<ProductPage />} /> */}
          <Route path="/about-us"           element={<AboutUs />} />
          <Route path="/contact"            element={<ContactPage />} />
          <Route path="/download-app"       element={<DownloadApp />} />
           <Route path="/faq"                element={<FAQPage />} />
          <Route path="/privacy-policy"     element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="/cookie-policy"      element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
