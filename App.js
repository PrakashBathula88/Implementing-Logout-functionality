import Nav from "./Components/Nav/Nav";
import Dummy from "./Components/Dummyitems/Dummy";
import Offer from "./Components/Offers/Offer";

import TopDealings from "./Components/TopDeals/TopDeal";
import Advertisement from "./Components/AdverTiseMent/AdverTises";
import { ProductProvider } from "./Components/AddCart/CartProviders";
function App() {
  return (
    <ProductProvider>
      <Nav />

      <Dummy />
      <Offer />
      <TopDealings />
      <Advertisement />
    </ProductProvider>
  );
}

export default App;
