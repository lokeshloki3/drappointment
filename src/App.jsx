import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import About from './pages/About';
import Footer from './components/Footer';
import BookAppointment from './pages/BookAppointment';
import CategoryPage from './pages/CategoryPage';
import ContentPage from './pages/ContentPage';
import Blogs from './pages/Blogs';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drappointment" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:categoryId" element={<CategoryPage />} />
        <Route path="/blogs/:categoryId/:contentId" element={<ContentPage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookAppointment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
