import React from "react";
import { Desktop, Mobile, Tablet } from "./../../../HOC/responsive";
import NavbarDesktopAndTablet from "./NavbarDesktopAndTablet";
import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  return (
    <div>
      <Desktop>
        <NavbarDesktopAndTablet />
      </Desktop>
      <Tablet>
        <NavbarDesktopAndTablet />
      </Tablet>
      <Mobile>
        <NavbarMobile />
      </Mobile>
    </div>
  );
}
