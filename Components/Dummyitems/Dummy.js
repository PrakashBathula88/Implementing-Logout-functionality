import React, { useEffect, useState } from "react";
import "../Dummyitems/Phones.css";
import { IoMdCart } from "react-icons/io";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useProductContext } from "../AddCart/CartProviders";
import Singlepage from "../Singlepage/Singlepage";
import { Link } from "react-router-dom";

const Dummy = () => {
  const { AddTocart } = useProductContext();
  const [phones, setPhones] = useState([]);
  const [Loading, SetLoading] = useState(true);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const FetchingProducts = async () => {
      try {
        const productsArr = [
          {
            title: "Iphone 12",

            price: "98,899",

            imageUrl:
              "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",

            desc: "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
          },

          {
            title: "One Plus 12",

            price: "69,999",

            imageUrl:
              "https://m.media-amazon.com/images/I/41pR0qlI0yL._SX300_SY300_QL70_FMwebp_.jpg",
            desc: " The weight of the phone is 207 g, and the weight of the screen protector may add an additional 3g. The size and weight of the mobile phone may vary according to configuration, manufacturing process and measurement method. 3. Due to the mobile phone system file occupying space (including Android system and pre-installed apps), the available memory capacity is less than this value. Storage capacity will vary based on software version and may vary from device to device. 4. Photo pixels of different camera modes may vary, please refer to the actual situation. Video pixels of different shooting modes may also vary, please refer to the actual situation. 5. The battery of OnePlus 12R adopts a series dual-cell design, with a typical capacity of 2750mAh (7.82V), equivalent to 5500mAh (3.91V); typical energy: 21.51Wh. The rated capacity is 2680mAh (7.82V), equivalent to 5360mAh (3.91V); rated energy: 20.96Wh. The battery is non-removable. 6. Product pictures and content on the page are for illustrative purposes only. ",
          },

          {
            title: "Realme ",

            price: "19,999",

            imageUrl:
              "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",

            desc: "The Realme 12x 5G is a sleek powerhouse redefining mobile technology. Swift charging meets endurance with 45 W SUPERVOOC Charge and a 5000 mAh battery, ensuring you're always connected. The Dimensity 6100+ 6nm chipset delivers lightning-fast 5G speeds for seamless connectivity wherever you are. Immerse yourself in the 12.07 cm (6.72) 120 Hz FHD+ Display, offering crystal-clear visuals with its ultra-smooth refresh rate. Style meets substance with its ultra-slim 7.69 mm profile and lightweight 188g body. Capture life's moments in stunning detail with the 50 MP AI camera, while the vapour chamber cooling system keeps performance optimal. Elevate your audio experience with dual stereo speakers, delivering Hi-Res Audio certification for immersive sound. The Realme 12x 5G: where innovation meets elegance in the palm of your hand.",
          },

          {
            title: "Realme Nazro",

            price: "17,999",

            imageUrl:
              "https://m.media-amazon.com/images/I/8195A49fZbL._AC_UY327_FMwebp_QL65_.jpg",

            desc: "The Realme 12x 5G is a sleek powerhouse redefining mobile technology. Swift charging meets endurance with 45 W SUPERVOOC Charge and a 5000 mAh battery, ensuring you're always connected. The Dimensity 6100+ 6nm chipset delivers lightning-fast 5G speeds for seamless connectivity wherever you are. Immerse yourself in the 12.07 cm (6.72) 120 Hz FHD+ Display, offering crystal-clear visuals with its ultra-smooth refresh rate. Style meets substance with its ultra-slim 7.69 mm profile and lightweight 188g body. Capture life's moments in stunning detail with the 50 MP AI camera, while the vapour chamber cooling system keeps performance optimal. Elevate your audio experience with dual stereo speakers, delivering Hi-Res Audio certification for immersive sound. The Realme 12x 5G: where innovation meets elegance in the palm of your hand.",
          },
          {
            title: "Redmi ",

            price: "17,889",

            imageUrl:
              "https://m.media-amazon.com/images/I/813ZN8Pj-HL._AC_UY327_FMwebp_QL65_.jpg",

            desc: " Redmi 12 5G mobile comes with a 90 Hz refresh rate 6.79-inch touchscreen display offering a resolution of 2460x1080 pixels (FHD+). The display sports Gorilla Glass for protection. Redmi 12 5G is powered by an octa-core Qualcomm Snapdragon 4 Gen 2 processor. It comes with 8GB RAM. The Redmi 12 5G runs Android 13 and is powered by a 5000mAh non-removable battery. The Redmi 12 5G supports proprietary fast charging.",
          },
        ];
        setPhones(productsArr);
        SetLoading(false);
      } catch (error) {
        SetError("Something went Wrong");
        console.error(error);
      }
    };
    FetchingProducts();
  }, []);
  const AddProductsToCart = (product) => {
    AddTocart(product);
  };

  return (
    <div>
      {Loading ? (
        <div>Loading...</div>
      ) : (
        <div className="container">
          {phones.map((product, id) => (
            <Link to={`/singlepage/${id}`}>
              <div key={id} className="All_products">
                <span>
                  <img src={product.imageUrl} alt={product.title}></img>
                </span>
                <span className="PRODUCT">
                  <h1>{product.title}</h1>

                  <span className="price_logo">
                    <LiaRupeeSignSolid />
                    {product.price}
                  </span>

                  <button
                    className="Cart_logo"
                    onClick={() => AddProductsToCart(product)}
                  >
                    <IoMdCart />
                    Cart
                  </button>
                </span>
              </div>
            </Link>
          ))}
          <Singlepage phones={phones} />
        </div>
      )}
    </div>
  );
};

export default Dummy;
