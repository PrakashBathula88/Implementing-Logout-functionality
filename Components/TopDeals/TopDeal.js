
import { LiaRupeeSignSolid } from "react-icons/lia";
import { IoMdCart } from "react-icons/io";
import "../TopDeals/Top.css";


const TopDealings = () => {
  
  return (
    <div className="Border-top">
      <h1 >Top Deals</h1>
      <div className="Sliding_top_deals">
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/l/1/t/7-iu6233-7-adidas-blunit-silvmt-solred-original-imagy6f6ys4eg79n.jpeg?q=70"
            alt="shoes-1"
          ></img>
          <h1>Shoes</h1>
          <span>
            <p><LiaRupeeSignSolid />1,999</p>
            <button>
              <IoMdCart />
              Cart
            </button>
          </span>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/x/4/j/s-tgytrackj51-dgytrackj52-tripr-original-imagyzwbbfgshuw9.jpeg?q=70"
            alt="paint-1"
          ></img>
          <h1>Nike</h1>
          <span>
            <p><LiaRupeeSignSolid />499</p>
            <button>
              <IoMdCart />
              Cart
            </button>
          </span>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/m/y/-original-imagzry3gugpvqty.jpeg?q=70"
            alt="shoes-2"
          ></img>
          <h1>Bata</h1>
          <span>
            <p><LiaRupeeSignSolid />3,999</p>
            <button>
              <IoMdCart />
              Cart
            </button>
          </span>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/x/r/y/m-av104sl-combo-avolt-original-imaghpzfqhh7zxza.jpeg?q=70"
            alt="paint-2"
          ></img>
          <h1>Track Paint</h1>
          <span>
            <p><LiaRupeeSignSolid />199</p>
            <button>
              <IoMdCart />
              Cart
            </button>
          </span>
        </div>
        <div>
          <img
            src="https://rukminim2.flixcart.com/image/612/612/xif0q/bangle-bracelet-armlet/b/t/k/2-5-2-6-na-3-jewel-42-52-43-alogo-original-imaghg3svgcbuyvx.jpeg?q=70"
            alt="shoes-3"
          ></img>
          <h1>Brass Gold</h1>
          <span>
            <p><LiaRupeeSignSolid />99</p>
            <button>
              <IoMdCart />
               Cart
            </button>
          </span>
        </div>
      
      </div>
      
    </div>
   
  );
};
export default TopDealings;
