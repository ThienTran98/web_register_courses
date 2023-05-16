import React from "react";
import { Desktop, Mobile, Tablet } from "./../../HOC/responsive";
import CheckOutPageDesktop from "./CheckOutPageDesktop";
import CheckOutPageMobile from "./CheckOutPageMobile";
import CheckOutPageTablet from "./CheckOutPageTablet";
import { useEffect } from "react";

export default function CheckOutPage() {
  useEffect(() => {
    document.title = "CheckOut";
  }, []);
  return (
    <>
      <Desktop>
        <CheckOutPageDesktop />
      </Desktop>
      <Tablet>
        <CheckOutPageTablet />
      </Tablet>
      <Mobile>
        <CheckOutPageMobile />
      </Mobile>
    </>
  );
}
