import React from "react";
import { Desktop, Mobile, Tablet } from "./../../../HOC/responsive";
import BannerDesktop from "./BannerDesktop";
import BannerTabletAndMobile from "./BannerTabletAndMobile";

export default function Banner() {
  return (
    <>
      <Desktop>
        <BannerDesktop />
      </Desktop>
      <Tablet>
        <BannerTabletAndMobile />
      </Tablet>
      <Mobile>
        <BannerTabletAndMobile />
      </Mobile>
    </>
  );
}
