import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Dummy from "./Components/Dummyitems/Dummy";
import Offer from "./Components/Offers/Offer";
import TopDealings from "./Components/TopDeals/TopDeal";
import Advertisement from "./Components/AdverTiseMent/AdverTises";
import About from "./Components/About/About";
import { ProductProvider } from "./Components/AddCart/CartProviders";
import Albums from "./Components/Home/Home";
function App() {
  return (
    <ProductProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<HomeSection />}></Route>

          <Route path="/about" element={<About />} />
          <Route path="/Album" element={<Albums />}></Route>
        </Routes>
      </Router>
    </ProductProvider>
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
