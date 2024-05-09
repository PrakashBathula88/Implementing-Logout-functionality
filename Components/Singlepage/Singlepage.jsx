import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { MdLocalOffer } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import "../Singlepage/SinglePage.css";

function Singlepage() {
  const productsArr = [
    {
      title: "Apple iPhone 15 (Black, 128 GB)",

      price: "98,899",

      imageUrl:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70",

      desc: "Experience the iPhone 15 – your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, it's USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15 – innovation at your fingertips. Goodbye cable clutter, hello convenience.",
    },

    {
      title: "OnePlus 10R (Forest Green, 128 GB) ",

      price: "69,999",

      imageUrl:
        "https://m.media-amazon.com/images/I/41pR0qlI0yL._SX300_SY300_QL70_FMwebp_.jpg",
      desc: " The weight of the phone is 207 g, and the weight of the screen protector may add an additional 3g. The size and weight of the mobile phone may vary according to configuration, manufacturing process and measurement method. 3. Due to the mobile phone system file occupying space (including Android system and pre-installed apps), the available memory capacity is less than this value. Storage capacity will vary based on software version and may vary from device to device. 4. Photo pixels of different camera modes may vary, please refer to the actual situation. Video pixels of different shooting modes may also vary, please refer to the actual . ",
    },

    {
      title: "realme 12x 5G (Twilight Purple, 128 GB) ",

      price: "19,999",

      imageUrl:
        "https://m.media-amazon.com/images/I/41tSQSq1xJL._SX300_SY300_QL70_FMwebp_.jpg",

      desc: "The Realme 12x 5G is a sleek powerhouse redefining mobile technology. Swift charging meets endurance with 45 W SUPERVOOC Charge and a 5000 mAh battery, ensuring you're always connected. The Dimensity 6100+ 6nm chipset delivers lightning-fast 5G speeds for seamless connectivity wherever you are. Immerse yourself in the 12.07 cm (6.72) 120 Hz FHD+ Display, offering crystal-clear visuals with its ultra-smooth refresh rate. Style meets substance with its ultra-slim 7.69 mm profile and lightweight 188g body. Capture life's moments in stunning detail with the 50 MP AI camera, while the vapour chamber cooling system keeps performance optimal cit. ",
    },

    {
      title: "realme Narzo N53 (Feather Black, 128 GB)",

      price: "17,999",

      imageUrl:
        "https://m.media-amazon.com/images/I/8195A49fZbL._AC_UY327_FMwebp_QL65_.jpg",

      desc: "The Realme 12x 5G is a sleek powerhouse redefining mobile technology. Swift charging meets endurance with 45 W SUPERVOOC Charge and a 5000 mAh battery, ensuring you're always connected. The Dimensity 6100+ 6nm chipset delivers lightning-fast 5G speeds for seamless connectivity wherever you are. Immerse yourself in the 12.07 cm (6.72) 120 Hz FHD+ Display, offering crystal-clear visuals with its ultra-smooth refresh rate. Style meets substance with its ultra-slim 7.69 mm profile and lightweight 188g body. Capture life's moments in stunning detail with the 50 MP AI camera, while the vapour chamber cooling system keeps performance optimal. ",
    },
    {
      title: "REDMI 12 5G (Pastel Blue, 256 GB)  (8 GB RAM) ",

      price: "17,889",

      imageUrl:
        "https://m.media-amazon.com/images/I/813ZN8Pj-HL._AC_UY327_FMwebp_QL65_.jpg",

      desc: " Redmi 12 5G mobile comes with a 90 Hz refresh rate 6.79-inch touchscreen display offering a resolution of 2460x1080 pixels (FHD+). The display sports Gorilla Glass for protection. Redmi 12 5G is powered by an octa-core Qualcomm Snapdragon 4 Gen 2 processor. It comes with 8GB RAM. The Redmi 12 5G runs Android 13 and is powered by a 5000mAh non-removable battery. The Redmi 12 5G supports proprietary fast charging.",
    },
  ];
  const { id } = useParams();
  const [ind, setInd] = useState(id);

  return (
    <div className="All_page">
      {ind && (
        <>
          <span>
            <img
              className="img_tag_hovering"
              src={productsArr[ind].imageUrl}
              alt="Loading..."
              style={{
                margin: "50px",
                position: "fixed",
                border: "3px solid #f0f0f0",
                padding: "50px",
                backgroundColor: "white",

                top: "70px",
                cursor: "pointer",
              }}
            ></img>
          </span>
          <div
            style={{
              top: "400px",
              position: "fixed",
              margin: "100px",
              display: "flex",
            }}
          >
            <button
              style={{
                padding: "15px",
                width: "130px",
                color: "blue",
                backgroundColor: "purple",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Add To cart
            </button>
            <button
              style={{
                marginLeft: "8px",
                width: "130px",
                color: "blue",
                backgroundColor: "red",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Buy now
            </button>
          </div>
          <div>
            <span className="PRODUCT">
              <h1 style={{ margin: "90px 60px 10px 240px" }}>
                {productsArr[ind].title}
              </h1>
              <p>27,966 Ratings & 1,778 Reviews </p>
              <p>Extra ₹13901 off</p>
              <span>
                <p style={{ fontSize: "28px", margin: "10px", color: "black" }}>
                  ₹ {productsArr[ind].price}{" "}
                </p>
                <p>
                  {" "}
                  <s> ₹79,900 </s>19% off i
                </p>
              </span>
              <div
                style={{
                  marginLeft: "30px",
                  textWrap: "pretty",
                  height: "160px",
                }}
              >
                <div>
                  <h3>Available offers</h3>
                  <MdLocalOffer style={{ color: "green" }} />
                  Bank Offer5% Cashback on Flipkart Axis Bank CardT&C
                </div>
                <div style={{ marginLeft: "394px" }}>
                  <MdLocalOffer style={{ color: "green" }} />
                  Bank Offer10% instant discount on SBI Credit Card
                  Transactions, up to ₹750 on orders of ₹5,000 and aboveT&C
                </div>
                <div>
                  <MdLocalOffer
                    style={{ color: "green", marginLeft: "438px" }}
                  />
                  Bank Offer10% instant discount on SBI Credit Card EMI
                  Transactions, up to ₹1,250 on orders of ₹5,000 and aboveT&C
                </div>
                <div>
                  <MdLocalOffer
                    style={{ color: "green", marginLeft: "138px" }}
                  />
                  Special PriceGet extra ₹13901 off (price inclusive of
                  cashback/coupon)T&C
                </div>
              </div>

              <div style={{ marginLeft: "150px" }}>
                <p>
                  1 Year Warranty for Phone and 6 Months Warranty for In-Box
                  Accessories
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2,6fr)",
                }}
              >
                <div
                  style={{
                    marginLeft: "550px",
                    justifyContent: "space-between",
                  }}
                >
                  <h2> Storage</h2>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span
                      style={{
                        border: "2px solid blue",
                        padding: "6px",
                        width: "60px",
                        color: "blue",
                        cursor: "pointer",
                      }}
                    >
                      128 GB
                    </span>
                    <span
                      style={{
                        border: "4px solid #f0f0f0",
                        padding: "6px",
                        width: "60px",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      256 GB
                    </span>
                    <span
                      style={{
                        border: "2px solid #f0f0f0",
                        padding: "6px",
                        width: "60px",
                        color: "black",
                        cursor: "pointer",
                      }}
                    >
                      512 GB
                    </span>
                  </div>
                </div>
                <div style={{ textWrap: "nowrap", listStyleType: "none" }}>
                  <ul
                    style={{
                      listStyleType: "none",
                      textWrap: "balance",
                      margin: "30px",
                      font: "icon",
                      fontSize: "18px",
                    }}
                  >
                    <h3>Highlights</h3>
                    <li>
                      <LuDot />
                      128 GB ROM
                    </li>
                    <li>
                      {" "}
                      <LuDot />
                      15.49 cm (6.1 inch) Super Retina XDR Display
                    </li>

                    <li>
                      {" "}
                      <LuDot /> 48MP + 12MP | 12MP Front Camera
                    </li>
                    <li>
                      <LuDot /> A16 Bionic Chip, 6 Core Processor Processor
                    </li>
                  </ul>
                </div>
              </div>
              <h2 style={{ marginLeft: "400px" }}>Description</h2>
              <p
                style={{
                  textWrap: "balance",
                  fontSize: "14px",
                  wordWrap: "break-word",
                  width: "760px",
                  marginLeft: "580px",
                  fontFamily: "fantasy",
                  color: "#212121",
                }}
              >
                {productsArr[ind].desc}
              </p>

              <div
                style={{
                  border: "3px solid #f0f0f0",
                  width: "900px",
                  marginLeft: "480px",
                  padding: "20px",
                }}
              >
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginLeft: "20px",
                  }}
                >
                  Product Description
                </h2>

                <h2
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    borderTop: "1px solid #f0f0f0",
                    marginLeft: "260px",
                  }}
                >
                  Dynamic Island
                </h2>
                <p style={{ textWrap: "balance", marginRight: "145px" }}>
                  Dynamic Island bubbles up alerts and Live Activities — so you
                  don’t miss them while you’re doing something else. You can
                  track your next ride, see who’s calling, check your flight
                  status, and so much more.
                </p>
                <img
                  src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/2a68bc53a5b740068a62b8140a19770e_18a8cada497_1.jpeg?q=90"
                  alt="Loading..."
                  style={{
                    margin: "0px 80px 70px 700px ",
                    marginTop: "-100px",
                  }}
                ></img>
                <img
                  src="https://rukminim2.flixcart.com/image/200/200/cms-rpd-img/af0f9e1e23c042ce9d8f27b02bb996d3_18a8cacbaad_HighlyDurable.jpeg?q=90"
                  alt="Load...."
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "-50px",
                  }}
                ></img>
                <p
                  style={{
                    textWrap: "balance",
                    marginLeft: "200px",
                    marginTop: "-100px",
                  }}
                >
                  Highly Durable The innovative new design features back glass
                  that has color infused throughout the material. A custom dual
                  ion-exchange process for the glass, and an aerospace-grade
                  aluminum enclosure, help make the iPhone 15 incredibly
                  durable.
                </p>
              </div>
            </span>

            <div style={{}}>
              <div
                style={{
                  position: "absolute",
                  zIndex: "7",
                  width: "100%",
                  height: "230px",
                  backgroundColor: "blue",
                  listStyleType: "none",
                  cursor: "pointer",
                  gap: "60px",
                  display: "flex",
                }}
              >
                <h3 style={{ marginLeft: "100px", width: "100px" }}>About</h3>
                <ul
                  style={{
                    listStyleType: "none",
                    marginTop: "70px",
                    position: "absolute",
                    marginLeft: "40px",
                    color: "white",
                  }}
                >
                  <li>Contact us</li>
                  <li>About us</li>
                  <li>Careers</li>
                  <li>Flipkartstories</li>
                  <li>Press</li>
                  <li>Corporate Information</li>
                </ul>
                <h3 style={{ marginLeft: "80px" }}>Group Companies</h3>
                <ul
                  style={{
                    listStyleType: "none",
                    marginTop: "80px",
                    position: "absolute",
                    marginLeft: "320px",
                    color: "white",
                  }}
                >
                  <li>Myntra</li>
                  <li>Flikart Wholesale</li>
                  <li>Cleartrip</li>
                  <li>Shortify</li>
                </ul>

                <h3 style={{ marginLeft: "80px" }}>Help</h3>
                <ul
                  style={{
                    listStyleType: "none",
                    marginTop: "80px",
                    position: "absolute",
                    marginLeft: "580px",
                    color: "white",
                  }}
                >
                  <li>Payments</li>
                  <li>Shipping</li>
                  <li>Cancellation & Returns</li>
                  <li>FaQ</li>
                  <li>Report Infringement</li>
                </ul>

                <h3 style={{ marginLeft: "130px" }}>CONSUMER POLICY</h3>
                <ul
                  style={{
                    listStyleType: "none",
                    marginTop: "70px",
                    position: "absolute",
                    marginLeft: "860px",
                    color: "white",
                  }}
                >
                  <li>Cancellation & Returns</li>
                  <li>Terms of Use</li>
                  <li>Security</li>
                  <li>Privacy</li>
                  <li>Sitemap</li>
                  <li>Grieviance Redressal</li>
                  <li>EPR Compilance</li>
                </ul>

                <h3 style={{ marginLeft: "130px" }}>MAIL US</h3>
                <ul
                  style={{
                    listStyleType: "none",
                    marginTop: "70px",
                    position: "absolute",
                    marginLeft: "1160px",
                    color: "white",
                  }}
                >
                  <li>Flipkart Internet Private Limited,</li>
                  <li>Buildings Alyssa, Begonia &</li>
                  <li>Clove Embassy Tech Village,</li>
                  <li>Outer Ring Road, Devarabeesanahalli Village,</li>
                  <li>Bengaluru, 560103,</li>
                  <li>Karnataka, India</li>
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Singlepage;
