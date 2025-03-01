import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
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
import CateogoryR from "./Components/routes/Category.routes";
import MyAccount from "./Pages/Authenticated/MyAccount";
import Contact from "./Pages/Contact";
import MailIn from "./Pages/MailIn";
import OurTeam from "./Pages/Home/OurTeam";
import Test from "./Pages/Test";
import Shop from "./Pages/Shop/Shop";
import Category from "./Pages/Shop/Category";
import ShippingAddress from "./Components/forms/ShippingAddress";
import Orders from "./Pages/Authenticated/Orders";
import ORders from "./Pages/Admin/Order/Orders";
import ChangePassword from "./Components/forms/ChangePassword";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Pages/Admin/Dashboard";
import Users from "./Pages/Admin/User/Users";
import Categories from "./Pages/Admin/Categories/Categories";
import AddCategory from "./Pages/Admin/Categories/AddCategory";
import EditCategory from "./Pages/Admin/Categories/EditCategory";
import ITEMS from "./Pages/Admin/Items/Items";
import ItemLayout from "./Pages/Admin/Items/ItemLayout";
import CreateItem from "./Pages/Admin/Items/CreateItem";
import EditItem from "./Pages/Admin/Items/EditItem";
import RefundPolicy from "./Pages/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms-conditions" element={<TOS />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mailin" element={<MailIn />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="shop/:_id" element={<Category />} />

        <Route path="/test" element={<Test />} />

        <Route path="/" element={<Auth />}>
          {/* USER  */}
          <Route path="/myaccount" element={<MyAccount />}>
            <Route path="" element={<Navigate to={"/myaccount/orders"} />} />
            <Route path="Addresses" element={<ShippingAddress />} />
            <Route path="changepassword" element={<ChangePassword />} />
            <Route path="orders" element={<Orders />} />
          </Route>

          {/* ADMIN  */}
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<Users />} />
            <Route path="category" element={<CateogoryR />}>
              <Route path="" element={<Categories />} />
              <Route path="addCategory" element={<AddCategory />} />
              <Route path=":_id" element={<EditCategory />} />
            </Route>
            <Route path="orders" element={<ORders />} />
            <Route path="items" element={<ItemLayout />}>
              <Route path="" element={<ITEMS />} />
              <Route path="newItem" element={<CreateItem />} />
              <Route path=":_id" element={<EditItem />} />
            </Route>
            <Route path="" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
