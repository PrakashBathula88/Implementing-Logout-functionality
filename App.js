import Nav from "./Components/Nav/Nav";
import Dummy from "./Components/Dummyitems/Dummy";
import Offer from "./Components/Offers/Offer";

import TopDealings from "./Components/TopDeals/TopDeal";
import Advertisement from "./Components/AdverTiseMent/AdverTises";

function App() {
  return (
    <div>
      <Nav />

      <Dummy />
      <Offer />
      <TopDealings />
      <Advertisement />
    </div>
  );
}

export default App;
