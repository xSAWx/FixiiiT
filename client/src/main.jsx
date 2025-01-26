import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "swiper/css/bundle";
import { ToastContainer } from "react-toastify";
import "react-quill/dist/quill.snow.css";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </>
);
