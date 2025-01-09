import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/layouts/Header";
import Navbar from "./Components/layouts/Navbar";
import useInHome from "./Utils/useInHome";
import Home from "./Pages/Home";

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
