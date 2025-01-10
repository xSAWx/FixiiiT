import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/layouts/Header";
import Navbar from "./Components/layouts/Navbar";

import Home from "./Pages/Home/Home";
import Footer from "./Components/layouts/Footer";
import Error404 from "./Pages/Error404";
import TOS from "./Pages/TOS";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQ from "./Pages/FAQ";
import AboutUs from "./Pages/AboutUs";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/terms-conditions" element={<TOS/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
