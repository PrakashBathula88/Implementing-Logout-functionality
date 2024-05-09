import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Dummy from "./Components/Dummyitems/Dummy";
import Offer from "./Components/Offers/Offer";
import TopDealings from "./Components/TopDeals/TopDeal";
import Advertisement from "./Components/AdverTiseMent/AdverTises";
import About from "./Components/About/About";
import { ProductProvider } from "./Components/AddCart/CartProviders";
import Albums from "./Components/Albums/Home.js";
import Contact from "./Components/Contact/Contact.js";
import Singlepage from "./Components/Singlepage/Singlepage.jsx";
import Signin from "./Components/SignIn/Signin.jsx";

import Profile from "./Components/Profile/Profile.jsx";
function App() {
  // const { token } = useAuth();
  return (
    <div>
      <ProductProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomeSection />}></Route>
            <Route path="singlepage/:id" element={<Singlepage />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album" element={<Albums />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
          </Routes>
        </Router>
      </ProductProvider>
    </div>
  );
}

const HomeSection = () => {
  return (
    <React.Fragment>
      <Dummy />
      <Offer />
      <TopDealings />
      <Advertisement />
    </React.Fragment>
  );
};

export default App;
