import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./Components/layouts/Header";
import Navbar from "./Components/layouts/Navbar";
import Home from "./Pages/Home/Home";
import Footer from "./Components/layouts/Footer";
import Error404 from "./Pages/Error404";
import TOS from "./Pages/TOS";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FAQ from "./Pages/FAQ";
import AboutUs from "./Pages/AboutUs";
import Sign from "./Pages/Auth/Sign";
import Auth from "./Components/routes/Auth.routes";
import MyAccount from "./Pages/Authenticated/MyAccount";
import Contact from "./Pages/Contact";
import MailIn from "./Pages/MailIn";
import OurTeam from "./Pages/Home/OurTeam";
import Test from "./Pages/Test";

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
        <Route path="/sign" element={<Sign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mailin" element={<MailIn />} />
        <Route path="/our-team" element={<OurTeam />} />

        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Auth />}>
          <Route path="/myaccount" element={<MyAccount />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
