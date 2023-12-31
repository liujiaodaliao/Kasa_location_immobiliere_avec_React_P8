import {Routes, Route} from "react-router-dom";
import React from "react";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Error from "./pages/Error/Error";
import Location from "./pages/Location/Location";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
       <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<Error />} />
        <Route path="/location/:id" element={<div>Location Placeholder</div>} />
        {/* 别忘了写好洗个页面此处对象改一下 */}

        {/* <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/error" element={<div>Error Placeholder</div>} />
        */}
        </Routes>
       </main>
       <Footer />
    </div>
  );
}

export default App;
