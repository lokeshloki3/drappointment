import React from 'react';
import { Route, Routes} from  'react-router-dom';
import Blogs from './components/Blogs';
import Home from './pages/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import About from './pages/About';

const App = () => {

  return (
    <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </div>
  );
};

export default App;
