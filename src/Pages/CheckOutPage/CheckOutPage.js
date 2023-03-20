import React from "react";
import { Desktop, Mobile, Tablet } from "./../../HOC/responsive";
import CheckOutPageDesktop from "./CheckOutPageDesktop";
import CheckOutPageMobile from "./CheckOutPageMobile";
import CheckOutPageTablet from "./CheckOutPageTablet";

export default function CheckOutPage() {
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
