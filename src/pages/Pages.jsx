import React from "react";
import Annu from "../components/annocuments/Annu";
import Discount from "../components/discount/Discount";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/mainpage/Home";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Shop from "../components/shop/Shop";
import TopCate from "../components/top/TopCate";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({
  productItems,
  cartItem,
  addToCart,
  decreaseQty,
  shopItems,
}) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals
        productItems={productItems}
        addToCart={addToCart}
        decreaseQty={decreaseQty}
      />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Wrapper />
    </>
  );
};

export default Pages;
