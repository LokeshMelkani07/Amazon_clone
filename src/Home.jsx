import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2file/Alllanguages/3000x1200_Hero-Tall_NP._CB635770012_.jpg"
            alt="banner image"
          />
          <div className="home_row">
            {/* Product */}
            <Product
              id="1"
              title="How to Win Friends & Influence People"
              price={250}
              image="https://m.media-amazon.com/images/I/71wrQ0bR8+S._AC_UL480_QL65_.jpg"
              rating={5}
            />
            <Product
              id="2"
              title="iQOO Z3 5G (Cyber Blue, 8GB RAM, 128GB Storage)"
              price={20990}
              image="https://m.media-amazon.com/images/I/615CXlFtDDS._AC_UL480_QL65_.jpg"
              rating={4}
            />
            {/* Product */}
          </div>

          <div className="home_row">
            {/* Product */}
            <Product
              id="3"
              title="AmazonBasics 127 cm (50 inches) 4K Ultra HD Smart LED Fire TV AB50U20PS (Black) "
              price={32000}
              image="https://m.media-amazon.com/images/I/71sFjIGl9UL._SL1240_.jpg"
              rating={3}
            />
            <Product
              id="4"
              title="Sparx Men's Sd0323g Sneakers "
              price={599}
              image="https://m.media-amazon.com/images/I/81scmnA0pUL._UL1500_.jpg"
              rating={5}
            />
            <Product
              id="5"
              title="RodZen Men's Cotton Half Sleeve Regular Fit Striped T-Shirt "
              price={449}
              image="https://m.media-amazon.com/images/I/619SqQW1NYL._UL1200_.jpg"
              rating={4}
            />
            {/* Product */}
            {/* Product */}
          </div>

          <div className="home_row">
            {/* Product */}
            <Product
              id="6"
              title="Apple iPhone 13 (256GB) - Blue"
              price={79999}
              image="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="7"
              title="Apple iPhone 13 Pro (256GB) - Sierra Blue "
              price={129900}
              image="https://m.media-amazon.com/images/I/61jLiCovxVL._SL1500_.jpg"
              rating={3}
            />
            <Product
              id="8"
              title="Apple Watch SE (GPS, 40mm)"
              price={29000}
              image="https://m.media-amazon.com/images/I/71Pln-8awPL._SL1500_.jpg"
              rating={4}
            />
            <Product
              id="9"
              title="2021 Apple iPad Pro with Apple M1 chip "
              price={82500}
              image="https://m.media-amazon.com/images/I/81a-rN2A3DS._SL1500_.jpg"
              rating={5}
            />
            <Product
              id="10"
              title="New Apple AirPods Pro with MagSafe Case"
              price={19999}
              image="https://m.media-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"
              rating={3}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
