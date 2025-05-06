import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './pages/Header';
import Contact from './pages/contact';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ExploreProperties from './pages/ExploreProperties';
import PropertyDetails from './pages/PropertyDetails';
import Loader from './components/Loader';
import ChatButtons from './components/ChatButtons';
import ThankYou from './pages/ThankYou ';
import ImageGallery from './pages/ImageGallery';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Minimum show time for loader (2.5s)
    const timer = setTimeout(() => {
      setLoading(false);
      // After loader finishes, show content with fade-in
      setTimeout(() => setShowContent(true), 100);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <div className={`transition-opacity duration-700 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
        {!loading && (
          <>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/properties" element={<ExploreProperties />} />
              <Route path="/properties/:id" element={<PropertyDetails />} />
              <Route path="/gallery/moments" element={<ImageGallery />} />
            </Routes>
            <Footer />
            <ChatButtons /> {/* Floating Chat Button */}
          </>
        )}
      </div>
    </>
  );
}

export default App;