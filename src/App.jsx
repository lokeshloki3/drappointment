import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import BookAppointment from './pages/BookAppointment';
import CategoryPage from './pages/CategoryPage';
import ContentPage from './pages/ContentPage';
import Blogs from './pages/Blogs';
import AppointmentModal from './components/AppointmentModal';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="mx-4 sm:mx-[10%]">
      {/* Pass `setIsModalOpen` to Navbar and Home components */}
      <Navbar setIsModalOpen={setIsModalOpen} />
      
      {/* Modal for booking appointment */}
      <AppointmentModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Routes>
        <Route path="/" element={<Home setIsModalOpen={setIsModalOpen} />} />
        <Route path="/drappointment" element={<Navigate to="/" replace />} />
        {/* <Route path="/drappointment" element={<Home />} /> */}
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:categoryId" element={<CategoryPage />} />
        <Route path="/blogs/:categoryId/:contentId" element={<ContentPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
