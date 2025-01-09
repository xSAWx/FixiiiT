import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/layouts/Header";
import Navbar from "./Components/layouts/Navbar";

import Home from "./Pages/Home/Home";
import Footer from "./Components/layouts/Footer";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
