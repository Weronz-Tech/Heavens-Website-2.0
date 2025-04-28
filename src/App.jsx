import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './pages/Header';
import Contact from './pages/contact';
import About from './pages/About';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ExploreProperties from './pages/ExploreProperties';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<ExploreProperties />} />
        <Route path="/properties/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
